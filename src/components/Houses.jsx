import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";

import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";

import HouseList from "./HouseList";
import { DesktopDatePicker } from "@mui/x-date-pickers";

const NavContainer = styled("div")`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	gap: 2rem;
	margin-bottom: 2rem;
	width: 100%;
	@media (max-width: 620px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;
const Styledbutton = styled(Button)`
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: none;
	color: #fff;
	margin: 1rem;
	font-size: 0.8rem;
	border-radius: 12px;
	padding: 0.2rem 2rem;
`;
const cities = [
	{ value: "delhi", label: "Delhi" },
	{ value: "noida", label: "Noida" },
	{ value: "mumbai", label: "Mumbai" },
];
const categories = [
	{ value: "houses", label: "Houses" },
	{ value: "studio", label: "Studio" },
	{ value: "offices", label: "Offices" },
];
const prices = [
	{ value: [5000, 6000], label: "$5000-6000" },
	{ value: [6000, 7000], label: "$6000-7000" },
	{ value: [7000, 8000], label: "$7000-8000" },
];

const Houses = () => {
	const [houses, setHouses] = useState([]);
	const [filter, setFilter] = useState([]);
	const [searchValue, setSearchValue] = useState([]);
	const [date, setDate] = useState(new Date("07/05/2022"));
	const [price, setPrice] = useState("");
	const [city, setCity] = useState("");
	const [category, setCategory] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [disableSearch, setDisableSearch] = useState(true);

	useEffect(() => {
		console.log(searchValue);
		if (searchValue != "") {
			const filteredHouses = houses?.response?.filter(
				(house) =>
					house.category === searchValue.category &&
					house.city === searchValue.city &&
					house.rentzestimate > searchValue.price[0] &&
					house.rentzestimate < searchValue.price[1]
			);
			console.log(filteredHouses);
			setFilter(filteredHouses);
		}
	}, [searchValue]);

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		setDisableSearch(!category || !city || !price);
	}, [category, city, price]);

	const fetchData = async () => {
		try {
			setLoading(true);
			const res = await fetch("./db.json");
			if (res.ok) {
				const result = await res.json();
				const data = {
					response: result,
				};
				setHouses(data);
				setFilter(data);
				console.log(houses);
			} else {
				throw new Error("response not OK");
			}
			setLoading(false);
		} catch (e) {
			setError(true);
			console.log(e);
		}
	};

	// 2022-07-04T18:30:00.000
	// '2022-07-05T18:30:00.000
	// '2022-07-06T18:30:00.000Z'
	// '2022-07-07T18:30:00.000Z'

	const handleCategoryChange = (e) => {
		setCategory(e.target.value);
	};

	const handleCityChange = (e) => {
		setCity(e.target.value);
	};

	const handlePriceChange = (e) => {
		setPrice(e.target.value);
	};

	const handleDateChange = (e) => {
		setDate(e);
		console.log(date);
	};
	const searchItems = () => {
		setSearchValue({
			city: city,
			price: price,
			category: category,
		});
	};

	return (
		<>
			<NavContainer>
				<TextField
					id="City"
					select
					value={city}
					label="City"
					onChange={handleCityChange}
					helperText="Please select your city"
				>
					{cities.map((citydown, idx) => {
						return (
							<MenuItem value={citydown.value} key={idx}>
								{citydown.label}
							</MenuItem>
						);
					})}
				</TextField>
				<DesktopDatePicker
					label="Date desktop"
					inputFormat="MM/dd/yyyy"
					minDate={new Date("07/05/2022")}
					maxDate={new Date("07/08/2022")}
					value={date}
					onChange={handleDateChange}
					renderInput={(params) => <TextField {...params} />}
				/>
				<TextField
					id="Prices"
					select
					value={price}
					label="Prices"
					onChange={handlePriceChange}
					helperText="Please select your Price Range"
				>
					{prices.map((usd, idx) => {
						return (
							<MenuItem value={usd.value} key={idx}>
								{usd.label}
							</MenuItem>
						);
					})}
				</TextField>
				<TextField
					id="Categories"
					select
					value={category}
					label="Category"
					onChange={handleCategoryChange}
					helperText="Select search category"
				>
					{categories.map((category, idx) => {
						return (
							<MenuItem key={idx} value={category.value}>
								{category.label}
							</MenuItem>
						);
					})}
				</TextField>
				<Styledbutton
					variant="contained"
					disabled={disableSearch}
					onClick={searchItems}
				>
					Search
				</Styledbutton>
			</NavContainer>
			{!loading ? (
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{filter.length >= 1 ? (
						<Grid
							container
							justifyContent="center"
							alignItems="flex-start"
							spacing={4}
						>
							{filter?.map((house, id) => {
								return (
									<HouseList
										key={id}
										name={house.name}
										image={house.images[0]}
										street={house.street}
										city={house.city}
										rent={house.rentzestimate}
										bedrooms={house.bedrooms}
										bathrooms={house.bathrooms}
										sqft={house.finishedSqFt}
									/>
								);
							})}
						</Grid>
					) : (
						<Grid
							container
							spacing={{ xs: 2, md: 3 }}
							columns={{ xs: 4, sm: 8, md: 12 }}
						>
							{houses?.response?.map((house, id) => {
								return (
									<HouseList
										key={id}
										name={house.name}
										image={house.images[0]}
										street={house.street}
										city={house.city}
										rent={house.rentzestimate}
										bedrooms={house.bedrooms}
										bathrooms={house.bathrooms}
										sqft={house.finishedSqFt}
									/>
								);
							})}
						</Grid>
					)}
				</Grid>
			) : (
				<div>loading...</div>
			)}
		</>
	);
};

export default Houses;
