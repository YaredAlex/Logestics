import {
	Button,
	IconButton,
	InputAdornment,
	TextField,
	Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import {
	AccountCircle,
	Email,
	Instagram,
	LocalActivityRounded,
	LocationCity,
	Twitter,
	WhatsApp,
} from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
const Contact = () => {
	return (
		<div
			style={{
				background: "#000",
				padding: 10,
				color: "#fff",
			}}
		>
			<Typography textAlign={"center"}>Contact</Typography>
			<Box>
				<Stack
					direction={{ md: "row", sm: "column" }}
					alignItems="center"
					justifyContent={{ md: "space-around" }}
				>
					<Box>
						<IconButton>
							<Twitter color="primary" />
							<Typography color={"#fff"}>Your twiter</Typography>
						</IconButton>
						<IconButton>
							<WhatsApp color="primary" />
							<Typography color={"#fff"}>Your twiter</Typography>
						</IconButton>
						<IconButton>
							<Instagram color="primary" />
							<Typography color={"#fff"}>Your twiter</Typography>
						</IconButton>
						<Box>
							<IconButton>
								<LocationCity color="primary" />
							</IconButton>
						</Box>
					</Box>
					<Box component={"form"}>
						<Box
							sx={{
								display: "flex",
								gap: 1,
							}}
						>
							<TextField
								variant="filled"
								label="name"
								type={"text"}
								sx={{
									background: "#fff",
									borderRadius: 1,
								}}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<AccountCircle />
										</InputAdornment>
									),
								}}
							/>
							<TextField
								variant="filled"
								label="email"
								type={"email"}
								sx={{
									background: "#fff",
									borderRadius: 1,
								}}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<Email />
										</InputAdornment>
									),
								}}
							/>
						</Box>
						<TextField
							rows={4}
							multiline
							label={"Message"}
							variant="filled"
							sx={{
								background: "#fff",
								borderRadius: 1,
								width: { xs: "100%" },
								marginTop: 1,
							}}
						/>
						<Button
							variant="contained"
							color="primary"
							endIcon={<SendIcon />}
							size="large"
							sx={{
								marginTop: 1,
								marginBottom: 1,
								width: "100%",
							}}
						>
							Send
						</Button>
					</Box>
				</Stack>
			</Box>
			<Typography textAlign={"center"}>
				All right are reserved | 2023
			</Typography>
		</div>
	);
};
export default Contact;
