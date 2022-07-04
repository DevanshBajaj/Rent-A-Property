import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Select from "react-select";

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

const cities = [
	{ value: "delhi", label: "Delhi" },
	{ value: "San Francisco", label: "San Francisco" },
	"Noida",
];
const categories = ["houses", "studio", "offices"];

// const categories = [
// 	{ value: "houses", label: "Houses" },
// 	{ value: "studio", label: "Studio" },
// 	{ value: "offices", label: "Offices" },
// ];
const prices = ["5000-6000", "6000-7000", "8000-9000", "9000-10000"];

const Houses = () => {
	const [banks, setBanks] = useState([]);
	const [filter, setFilter] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [disableSearch, setDisableSearch] = useState(true);
	const [city, setCity] = useState("MUMBAI");

	const [category, setCategory] = useState("");

	// const handleCity = (event) => {
	// 	setCity(event.target.value);
	// 	console.log(city);
	// };
	// const handleType = (event) => {
	// 	setCategory(event.target.value);
	// };

	// useEffect(() => {
	// 	setDisableSearch(!categories || !city);
	// }, [category, city]);

	useEffect(() => {
		fetchData();
	}, [city]);

	const fetchData = async () => {
		try {
			setLoading(true);

			const res = await fetch("./db.json");
			if (res.ok) {
				const result = await res.json();
				const data = {
					response: result,
				};
				setBanks(data);
				setFilter(data);
				console.log(banks);
			} else {
				throw new Error("response not OK");
			}
			setLoading(false);
		} catch (e) {
			setError(true);
			console.log(e);
		}
	};

	const handleCategoryChange = (e) => {
		const value = e.target.value;
		setCategory(e.target.value);
		// setCategory(value);
		console.log(category);
		if (category !== "" && value !== "") {
			const filteredData = banks?.response.filter((bank) =>
				bank.category.toLowerCase().includes(category.toLowerCase())
			);
			console.log(category);
			setFilter(filteredData);
			console.log(filter);
		} else {
			setFilter(banks);
		}
	};

	// const filterItems = (categoryInput) => {
	// 	setCategory(categoryInput);
	// 	if (category !== "") {
	// 		console.log(category);
	// 		const filteredData = banks?.response.filter((bank) =>
	// 			bank.category.toLowerCase().includes(category.toLowerCase())
	// 		);
	// 		setFilter(filteredData);
	// 		console.log(filter);
	// 	} else {
	// 		setFilter(banks);
	// 	}
	// };
	// const searchItems = (searchInput) => {
	// 	setSearchValue(searchInput);
	// 	if (type !== "") {
	// 		const filteredData = banks?.response.filter((bank) =>
	// 			bank.category.toLowerCase().includes(type.toLowerCase())
	// 		);
	// 		setFilter(filteredData);
	// 		console.log(filteredData);
	// 	} else {
	// 		setFilter(banks);
	// 	}
	// };

	return (
		<>
			<NavContainer>
				{/* <TextField
					id="City"
					select
					value={city}
					label="City"
					onChange={handleCity}
					helperText="Please select your city"
				>
					{cities.map((citydown, idx) => {
						return (
							<MenuItem value={citydown} key={idx}>
								{citydown}
							</MenuItem>
						);
					})}
				</TextField> */}
				<TextField
					id="Categories"
					select
					value={category}
					label="Category"
					onChange={(e) => filterItems(e.target.value)}
					helperText="Select search category"
				>
					{categories.map((category, idx) => {
						return (
							<MenuItem key={idx} value={category}>
								{category}
							</MenuItem>
						);
					})}
				</TextField>
				{/* {!disableSearch && (
					<CssTextField
						id="outlined-basic"
						label="Search"
						variant="outlined"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<Search />
								</InputAdornment>
							),
						}}
						disabled={disableSearch}
						onChange={(e) => searchItems(e.target.value)}
					/>
				)} */}
			</NavContainer>
			{/* <TextField
				id="Categories"
				select
				value={category}
				label="Category"
				onChange={handleCategoryChange}
				helperText="Select search category"
			>
				{categories.map((type, idx) => {
					return (
						<MenuItem key={idx} value={type}>
							{type}
						</MenuItem>
					);
				})}
			</TextField> */}
			{loading ? (
				<div>loading...</div>
			) : (
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{banks?.response?.map((house, id) => {
						return (
							<Grid item xs={2} sm={4} md={4}>
								<Card sx={{ borderRadius: 2 }}>
									<CardActionArea>
										<CardMedia
											component="img"
											height="140"
											image={house.images[0]}
											alt="rental house"
										/>
										<CardContent>
											<Typography gutterBottom variant="h6" component="div">
												{house.name}
											</Typography>
											<Typography gutterBottom variant="body1" component="div">
												{house.street}
											</Typography>
											<Typography
												variant="subtitle1"
												color="primary.main"
												mb={1}
											>
												${house.rentzestimate}
												<Typography variant="span" color="text.secondary">
													/month
												</Typography>
											</Typography>
											<Divider />
											<Stack direction="row" spacing={2} mt={2}>
												<Stack direction="row" spacing={1}>
													<Bed fontSize="small" />
													<Typography variant="body2">
														{house.bedrooms}
													</Typography>
												</Stack>
												<Stack direction="row" spacing={1}>
													<BathtubIcon fontSize="small" />
													<Typography variant="body2">
														{house.bathrooms}
													</Typography>
												</Stack>
												<Stack direction="row" spacing={1}>
													<ImageAspectRatioIcon fontSize="small" />
													<Typography variant="body2">
														{house.finishedSqFt} sqft.
													</Typography>
												</Stack>
											</Stack>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			)}
		</>
	);
};

export default Houses;
