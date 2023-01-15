import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const About = () => {
	return (
		<div
			style={{
				background: "rgba(0,0,0,0.1)",
				paddingTop: "30px",
			}}
		>
			<Typography
				variant="h4"
				textAlign="center"
			>
				About
			</Typography>
			<Box padding={1}>
				<Stack
					direction="column"
					spacing={3}
					alignItems="center"
				>
					<Typography
						variant="body2"
						maxWidth={500}
					>
						{`Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Praesent vel faucibus lectus.
                        Sed erat nibh, faucibus ac neque ultrices,
                         sagittis blandit neque. Interdum et malesuada
                         fames ac ante ipsum primis in faucibus.
                          Maecenas a scelerisque est.
                          Morbi non maximus orci, nec sagittis leo.
                          Etiam dictum molestie malesuada. `}
					</Typography>
					<Typography
						variant="body2"
						maxWidth={500}
					>{`Ut sollicitudin nunc enim, 
                    id scelerisque magna congue in. In luctus quam ex, 
                    id ultricies turpis imperdiet vel. Nullam convallis
                     ultricies metus, sit amet suscipit lectus tempor ac. 
                     Orci varius natoque penatibus et magnis 
                    dis parturient montes, nascetur ridiculus mus.`}</Typography>
				</Stack>
			</Box>
		</div>
	);
};
export default About;
