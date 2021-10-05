import React from 'react'
import AppContextProvider from '../context/AppContextProvider'

function TodoMain({ header, form, children }) {
	return (
			<AppContextProvider>
				<main className="main_box">
					<div className="todoHead">
						<h1>TO DO List </h1>
						<p>2021.09.30. v1.0.0</p>
					</div>
					<section>{form}</section>
					<section>{children}</section>
				</main>
			</AppContextProvider>
	)
}
 
export default TodoMain
