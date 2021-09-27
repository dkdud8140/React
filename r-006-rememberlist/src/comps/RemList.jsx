import { React, useState, useEffect, } from 'react'
import useCallback from 'react'
import moment from "moment";
import UUID from "react-uuid";


const headArray = ["날짜","시간","기억할 일"];


// const remeberSampleData = {
// 	r_id: "0001",
// 	r_date: "2021-09-08",
// 	r_time: "10:36:00",
// 	r_remember: "나의 리맴버 리스트",
// 	r_comp: false, // 완료표식
// };

function RemList() {

	const rem_header = useCallback(() =>{
		return headArray.map(text =>{
			return ( <th key={UUID()}>{text}</th>)
		})
	},[]);

	const [rememberList, setRememberList] = useState([]);

	const fetchCallback = useCallback( () =>{
		const remString = localStorage.rememberList;
		if(remString) {
			const remJSON = JSON.parse(remString);
			setRememberList(remJSON);
		}
	}, [] );

	useEffect(fetchCallback,[fetchCallback]);

	
	const saveSrotage = () =>{
		if(rememberList.length > 0) {

			rememberList.sort((pre, next) => {
				if (pre.r_comp && !next.r_comp) return 1;
				if (!pre.r_comp && next.r_comp) return -1;
				return 0;
			  });

			localStorage.rememberList = JSON.stringify(rememberList);
		}
	}

	useEffect(saveSrotage, [rememberList]);


	const trOnClick = (e) =>{
		const td = e.target

		if(td.tagName === "TD") {

			const uuid = td.closest("TR").dataset.uuid;
			// const _list = rememberList.filter((remember)=>{
			// 	return remember.r_id !== uuid;
			// })
			const _list = rememberList.map(remember=>{
				if(remember.r_id === uuid) {
					return {...remember, r_comp : !remember.r_comp}
				}
				return remember ; 
			})

			setRememberList([..._list]);
		}
	}

	const list_body = rememberList.map(remember=>{
		return (
		<tr 
			key={remember.r_id}
			data-uuid={remember.r_id} 
			className={remember.r_comp ? "comp" : ""}
			onDoubleClick={trOnClick} >
			<td>{remember.r_date}</td>
			<td>{remember.r_time}</td>
			<td>{remember.r_remember}</td>
		</tr>
		);
	})
 
	const onKeyDown = (e) =>{
		if(e.keyCode === 13) {
			const { value } = e.target;

			const remember ={
				r_id : UUID(),
				r_date: moment().format("YYYY[-]MM[-]DD"),
				r_time: moment().format("HH:mm:ss"),
				r_remember : value,
				r_comp : false,
			}

			setRememberList([...rememberList, remember]);
			//setRememberList(rememberList.concat(remember));
			e.target.value = "";
		}
	}

	return (
		<table className="rem_list">
			<thead>
				<tr>{rem_header()}</tr>
			</thead>
			<tbody>
				{list_body}
				<tr>
					<td colSpan="2">기억할 일</td>
					<td><input onKeyDown={onKeyDown}
					name="r_remember" placeholder="기억할 일"/></td>
				</tr>
			</tbody>	
			
			
		</table>
	)
}

export default RemList;