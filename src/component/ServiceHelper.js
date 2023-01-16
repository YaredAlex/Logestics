import { Card, CardContent, Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/material";

export const TextFirst = ({ item }) => {
	return (
		<>
			<Paper
				sx={{
					maxWidth: 300,
					padding: 1,
				}}
				elevation={1}
			>
				<Typography
					variant="h5"
					textAlign={"center"}
					padding={1}
				>
					{item.service}
				</Typography>
				<Divider />
				<Typography
					paddingLeft={1}
					fontSize={20}
					marginTop={1.6}
				>
					{item.serviceDescription}
				</Typography>
			</Paper>
			<Card
				key={item}
				sx={{
					maxHeight: 350,
					maxWidth: 300,
					minWidth: 280,
					background: `url(${item.url}) no-repeat center center`,
					backgroundSize: "cover",
				}}
			>
				<Box
					sx={{
						background: "rgba(0,0,0,0.3)",
						height: 400,
						display: "block",
					}}
				>
					<CardContent>
						<Typography
							textAlign="center"
							sx={{
								marginTop: 10,
							}}
							variant="h5"
							color={"#fff"}
						>
							{item.title}
						</Typography>
						<Typography
							textAlign="center"
							color={"#fff"}
						>
							{item.content}
						</Typography>
					</CardContent>
				</Box>
			</Card>
		</>
	);
};

export const CardFirst = ({ item }) => {
	return (
		<>
			<Card
				key={item}
				sx={{
					maxHeight: 350,
					maxWidth: 300,
					minWidth: 280,
					background: `url(${item.url}) no-repeat center center`,
					backgroundSize: "cover",
				}}
			>
				<Box
					sx={{
						background: "rgba(0,0,0,0.3)",
						height: 400,
						display: "block",
					}}
				>
					<CardContent>
						<Typography
							textAlign="center"
							sx={{
								marginTop: 10,
							}}
							variant="h5"
							color={"#fff"}
						>
							{item.title}
						</Typography>
						<Typography
							textAlign="center"
							color={"#fff"}
						>
							{item.content}
						</Typography>
					</CardContent>
				</Box>
			</Card>
			<Paper
				sx={{
					maxWidth: 300,
					padding: 1,
				}}
				elevation={1}
			>
				<Typography
					variant="h5"
					textAlign={"center"}
					padding={1}
				>
					{item.service}
				</Typography>
				<Divider />
				<Typography
					paddingLeft={1}
					fontSize={20}
					marginTop={1.6}
				>
					{item.serviceDescription}
				</Typography>
			</Paper>
		</>
	);
};
