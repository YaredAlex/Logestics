import {
	AppBar,
	IconButton,
	Tab,
	Tabs,
	Toolbar,
	Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NavDrawer from "./Drawer";

const NavBars = () => {
	const linkNavigation = ["Home", "Service", "About"];
	const [drawer, setDrawer] = useState(false);
	const [tabValue, setTabValue] = useState(0);
	const handleTabChange = (event, val) => {
		setTabValue(val);
	};
	return (
		<div>
			<AppBar
				sx={{
					color: "#fff",
					background: "#000",
				}}
			>
				<Toolbar>
					<Typography variant="h4">Logo</Typography>
					<Tabs
						value={tabValue}
						onChange={handleTabChange}
						sx={{
							display: { sm: "block", xs: "none" },
							marginLeft: "auto",
						}}
						textColor="inherit"
					>
						{linkNavigation.map(page => (
							<Tab
								key={page}
								label={page}
								href={`#${page.toLowerCase()}`}
							/>
						))}
					</Tabs>
					<IconButton
						sx={{
							display: { xs: "block", sm: "none" },
							ml: "auto",
						}}
						onClick={() => setDrawer(true)}
					>
						<MenuIcon
							fontSize="large"
							color="error"
						/>
					</IconButton>
				</Toolbar>
			</AppBar>
			<NavDrawer
				drawer={drawer}
				setDrawer={setDrawer}
			/>
		</div>
	);
};
export default NavBars;
