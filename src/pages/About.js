import { Box, Typography } from "@mui/material";

const About = () => {
	return (
		<div
			style={{
				background: `url('https://wallpaperaccess.com/full/1457949.jpg')`,
				paddingTop: 20,
				paddingBottom: 20,
				color: "#fff",
			}}
			id="about"
		>
			<Typography
				variant="h4"
				textAlign="center"
			>
				About
			</Typography>
			<Box padding={1}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						columnGap: 3,
					}}
				>
					<Box
						sx={{
							color: "#fff",
							display: "flex",
							flexDirection: "column",
							rowGap: 2,
							fontFamily: `'Sofia Sans Semi Condensed', sans-serif`,
						}}
						padding={1}
					>
						<Typography
							variant="body2"
							fontSize={20}
							maxWidth={600}
							sx={{
								fontFamily: `'Sofia Sans Semi Condensed', sans-serif`,
							}}
						>
							{`.(Our) Logistic is one of the most efficient transportation 
                        to precede forward your business.
                     Transportation was established in …. in response to great selection, 
                    high quality for a reliable and price-competitive transport company
                    and make transportation easy way
. `}
						</Typography>
						<Typography
							variant="body2"
							fontSize={20}
							maxWidth={600}
							sx={{
								fontFamily: `'Sofia Sans Semi Condensed', sans-serif`,
							}}
						>{`….. has mission and vision which can help your business solution, 
                    delivery solution, express services, import and export services`}</Typography>
						<Typography
							variant="body2"
							fontSize={20}
							maxWidth={600}
						>{`…  our service through our logistic save time , reduce your cost and increase
                     reliability for your business. We were focusing on providing excellent transportation and 
                     logistics solutions.
                   `}</Typography>
						<Typography
							variant="body2"
							fontSize={20}
							maxWidth={600}
						>{`Fast and safe transportation with team spirit, new technologies, 
                    24/7 support is what we offer for your business
                   The goal here is to maximize efficiency by focusing on
                   core competencies, while at the same time minimizing procurement costs
                   with the supply process.`}</Typography>
					</Box>
					<Box
						sx={{
							display: { xs: "none", md: "block" },
						}}
					>
						<img
							src="/forabout.jfif"
							width={300}
							style={{
								objectFit: "cover",
							}}
							alt="about"
						/>
					</Box>
				</Box>
			</Box>
		</div>
	);
};
export default About;
