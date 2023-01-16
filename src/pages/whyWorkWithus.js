import { Divider, Typography, Box } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import UserResponse from "../component/ResponseCarousel";
const whywithus = [
	{
		title: `Trused By all users`,
		id: "work_1",
	},
	{
		title: `To access the raw materials needed to develop your business`,
		id: "work_2",
	},
	{
		title: `To reliable and price-competitive transport company and make 
        transportation easy way`,
		id: "work_3",
	},
	{
		title: `To get the best and effective ways to transfer the resources and products 
        from first place to destiny `,
		id: "work_4",
	},
	{
		title: `Our service ensure your goods are delivered and stored to desire destination 
        with clean, safe, heated, dry and cool`,
		id: "work_5",
	},
	{
		title: `Modern trucks with team spirit, new technologies, 24/7 support, and fast delivery from
         departure to destination.`,
		id: "work_6",
	},
];
export const WorkWithUs = () => {
	return (
		<>
			<Box
				paddingTop={2}
				sx={{
					background: `url('/engineer.jfif') no-repeat center center`,
					backgroundSize: "cover",
					color: "#fff",
				}}
			>
				<Typography
					textAlign={"center"}
					variant="h4"
				>
					Why ship with us
				</Typography>
				{whywithus.map(item => (
					<Box
						key={item.id}
						maxWidth={500}
						padding={1}
						sx={{
							margin: "0 auto",
							display: "flex",
						}}
					>
						<CheckCircleOutlineRoundedIcon color="primary" />
						<Typography
							marginLeft={1}
							fontSize={20}
						>
							{item.title}
						</Typography>
						<Divider />
					</Box>
				))}
				<UserResponse />
			</Box>
		</>
	);
};
