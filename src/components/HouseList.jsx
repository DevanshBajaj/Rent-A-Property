import { styled } from "@mui/material/styles";

import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	CardActionArea,
	Grid,
	TableHead,
	TableRow,
	MenuItem,
	TextField,
	InputAdornment,
	Skeleton,
	Paper,
	Chip,
	Stack,
	Divider,
} from "@mui/material";
import { Bed, Category, Search } from "@mui/icons-material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useNavigate } from "react-router-dom";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import ImageAspectRatioIcon from "@mui/icons-material/ImageAspectRatio";

const NavContainer = styled("div")`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	gap: 2rem;
	margin-bottom: 2rem;
	width: 100%;
	@media (max-width: 620px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;
const CssTextField = styled(TextField)({
	"& label.Mui-focused": {
		color: "primary",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "grey",
	},
	"& .MuiOutlinedInput-root": {
		"&:hover fieldset": {
			borderColor: "secondary",
		},
		"&.Mui-focused fieldset": {
			borderColor: "primary",
		},
	},
});

const HouseList = (props) => {
	const { name, street, sqft, bathrooms, bedrooms, image, rent } = props;
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
							{street}
						</Typography>
						<Typography variant="subtitle1" color="primary.main" mb={1}>
							${rent}
							<Typography variant="span" color="text.secondary">
								/month
							</Typography>
						</Typography>
						<Divider />
						<Stack direction="row" spacing={2} mt={2}>
							<Stack direction="row" spacing={1}>
								<Bed fontSize="small" />
								<Typography variant="body2">{bedrooms}</Typography>
							</Stack>
							<Stack direction="row" spacing={1}>
								<BathtubIcon fontSize="small" />
								<Typography variant="body2">{bathrooms}</Typography>
							</Stack>
							<Stack direction="row" spacing={1}>
								<ImageAspectRatioIcon fontSize="small" />
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
