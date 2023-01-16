import {
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	SwipeableDrawer,
} from "@mui/material";

const NavDrawer = ({ drawer, setDrawer }) => {
	const linkNavigation = ["HOME", "SERVICE", "ABOUT"];
	return (
		<div>
			<SwipeableDrawer
				open={drawer}
				onClose={() => setDrawer(false)}
				color="primary"
				anchor="top"
				onOpen={() => setDrawer(true)}
			>
				<List>
					{linkNavigation.map((page, index) => (
						<ListItem key={page + index}>
							<ListItemButton
								divider
								href={`#${page.toLowerCase()}`}
								onClick={() => setDrawer(false)}
							>
								<ListItemText primary={page} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</SwipeableDrawer>
		</div>
	);
};

export default NavDrawer;
