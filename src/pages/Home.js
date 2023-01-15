import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Home = () => {
	return (
		<Box
			style={{
				background: `url('https://img.freepik.com/premium-photo/transportation-logistics-container-cargo-ship-cargo-plane-3d-rendering-illustration_37416-451.jpg?w=2000') no-repeat center `,
				backgroundSize: "cover",
				height: "100vh",
				position: "relative",
			}}
		>
			<Box
				sx={{
					position: "relative",
					width: "100%",
					height: "100%",
					background: "rgba(0,0,0,0.3)",
				}}
			>
				<Box
					sx={{
						position: "absolute",
						top: 300,
						width: "100%",
					}}
				>
					<Typography
						fontSize={{ xs: 30, md: 50 }}
						textAlign={{ xs: "center", md: "left" }}
						color="#fff"
						marginLeft={3}
					>
						Come work with us!
					</Typography>
					<Typography
						fontSize={{ xs: 20, md: 25 }}
						textAlign={{ xs: "center", md: "left" }}
						color="#fff"
						marginLeft={3}
					>
						Make Your experiance unforgotable
					</Typography>
					<Box padding={1}>
						<Button
							variant="contained"
							size="large"
							color="error"
							sx={{
								width: { xs: "100%", sm: 500 },
								margin: "0 auto",
								display: { xs: "block", md: "inline-block" },
							}}
						>
							Connect
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
export default Home;
