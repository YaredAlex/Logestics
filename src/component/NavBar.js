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
				color="transparent"
				sx={{
					background: "rgba(0,0,0,0.7)",
					color: "#fff",
				}}
			>
				<Toolbar>
					<Typography variant="h4">Logo</Typography>
					<Tabs
						value={tabValue}
						onChange={handleTabChange}
						sx={{
							display: { sm: "block", xs: "none" },
							margin: "0 auto",
						}}
						textColor="inherit"
					>
						{linkNavigation.map(page => (
							<Tab
								key={page}
								label={page}
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
