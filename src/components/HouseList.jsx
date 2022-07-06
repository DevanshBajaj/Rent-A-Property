import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	CardActionArea,
	Grid,
	Stack,
	Divider,
} from "@mui/material";
import { Bed, Bathtub, ImageAspectRatio } from "@mui/icons-material";

const HouseList = (props) => {
	//Props from parent components
	const {
		name,
		street,
		sqft,
		bathrooms,
		bedrooms,
		image,
		rent,
		city,
		category,
		date,
	} = props;

	//Format date to more readable form
	const dateFormat = new Date(date).toLocaleDateString();

	//function to capitalize first letter of string
	const capitalize = (string) => {
		return string.replace(/^./, (str) => str.toUpperCase());
	};

	return (
		<Grid item xs={6} sm={4} md={4}>
			<Card sx={{ borderRadius: 2 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image={image}
						alt="rental house"
					/>
					<CardContent>
						<Typography gutterBottom variant="h6" component="div">
							{name}
						</Typography>
						<Typography gutterBottom variant="body1" component="div">
							{street}, {capitalize(city)}
						</Typography>
						<Typography variant="subtitle1" color="primary.main" mb={1}>
							${rent}
							<Typography variant="span" color="text.secondary">
								/month
							</Typography>
						</Typography>
						<Typography variant="subtitle1" color="text.primary">
							Move-In date: &nbsp;
							<Typography variant="span" color="primary.main" mb={1}>
								{dateFormat}
							</Typography>
						</Typography>
						<Typography variant="subtitle1" color="text.primary">
							Category: &nbsp;
							<Typography variant="span" color="primary.main" mb={1}>
								{capitalize(category)}
							</Typography>
						</Typography>
						<Divider />
						<Stack direction="row" spacing={2} mt={2}>
							<Stack direction="row" spacing={1}>
								<Bed fontSize="small" />
								<Typography variant="body2">{bedrooms}</Typography>
							</Stack>
							<Stack direction="row" spacing={1}>
								<Bathtub fontSize="small" />
								<Typography variant="body2">{bathrooms}</Typography>
							</Stack>
							<Stack direction="row" spacing={1}>
								<ImageAspectRatio fontSize="small" />
								<Typography variant="body2">{sqft} sqft.</Typography>
							</Stack>
						</Stack>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
};

export default HouseList;
