import React, { useState, useEffect } from 'react';

import NavIcon from './components/navIcon';
import Text from '../../components/text';

import {MdOutlineSearch, 
				MdOutlineBedtime,
				MdOutlineNotifications, 
				MdOutlineModeComment, 
				MdOutlineGridView, 
				MdManageAccounts, 
				MdOutlineSettings} 
from 'react-icons/md';

import { Container, IconsArea } from './styles';


const Navbar = () => {

	const [active, setActive] = useState(false)

	const NavButtons = [
		{
			data: {
         icon: <MdOutlineSearch/>,
				  name: 'Search'
			},
		},

		{
			data: {
				 icon: <MdOutlineBedtime/>,
					name: 'Mode'
			},
		},

		{
			data: {
				 icon: <MdOutlineNotifications/>,
					name: 'Notifications'
			},
		},

			{
				data: {
					 icon: <MdOutlineModeComment/>,
						name: 'Chat'
				},
			},

		{
			data: {
				 icon: <MdOutlineGridView/>,
					name: 'MenuGrid'
			},
		},

		{
			data: {
				 icon: <MdManageAccounts/>,
					name: 'User'
			},
		},
		
	]

return (
			<Container>
				<IconsArea>
					{NavButtons.map((item, index) => {
				return(
					<NavIcon index = {index} icon = {item.data.icon}/>
				)
						
					})}
				 
					</IconsArea>
					<div>
						<Text text='Usuário' color={({ theme }) => theme.colors.text} fontWeight='bold'/>
						<Text text='Cargo' color={({ theme }) => theme.colors.secondaryBackground} fontSize='12px'/>
					</div>
				 <MdOutlineSettings />

	</Container>
	)

}

export default Navbar

