import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Home = () => {
	return (
		<Box
			style={{
				background: `url('/home2.jfif') no-repeat center center `,
				backgroundSize: "cover",
				height: "100vh",
				position: "relative",
			}}
			id="home"
		>
			<Box
				sx={{
					position: "relative",
					width: "100%",
					height: "100%",
					background: "rgba(0,0,0,0.11)",
				}}
			>
				<Box
					sx={{
						position: "absolute",
						top: { xs: 250, md: 300 },
						width: "100%",
					}}
				>
					<Typography
						fontSize={{ xs: 50, md: 50 }}
						textAlign={{ xs: "center", md: "left" }}
						color="#fff"
						fontWeight={800}
						marginLeft={3}
						sx={{}}
						lineHeight={1.2}
					>
						Go Beyond your limit
					</Typography>

					<Typography
						fontSize={{ xs: 20, md: 25 }}
						textAlign={{ xs: "center", md: "left" }}
						color="#fff"
						fontWeight={700}
						marginLeft={3}
						paddingTop={1}
						width={{ md: 500 }}
						lineHeight={1.2}
					>
						{/* Reliable logestics to move your business Work with us and Excel your
						experiance unforgotable */}
						Welcome to our logistics website! We are a leading provider of
						transportation and logistics solutions for businesses of all sizes.
					</Typography>
					<Box padding={1}>
						<Button
							variant="contained"
							size="large"
							color="warning"
							sx={{
								width: { xs: "100%", sm: 500 },
								height: 50,
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
