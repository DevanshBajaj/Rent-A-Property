import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";

import { Button, Grid, MenuItem, TextField } from "@mui/material";

import HouseList from "./HouseList";

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
const cities = ["all", "Delhi", "Noida", "Mumbai"];
const categories = ["all", "houses", "studio", "offices"];
const prices = [
	{ value: "6000", label: ">=6000" },
	{ value: "7000", label: ">=7000" },
	{ value: "9000", label: ">=8000" },
];

const Houses = () => {
	const [houses, setHouses] = useState([]);
	const [price, setPrice] = useState([]);
	const [filter, setFilter] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [disableSearch, setDisableSearch] = useState(true);
	const [city, setCity] = useState("");

	const [category, setCategory] = useState("");

	useEffect(() => {
		if (category != "" && category != "all") {
			const filteredData = houses?.response.filter((bank) =>
				bank.category.toLowerCase().includes(category.toLowerCase())
			);
			console.log(filteredData);
			setFilter(filteredData);
		} else {
			setFilter(houses);
		}
	}, [category]);

	useEffect(() => {
		if (city != "" && city != "all") {
			const filteredCities = houses?.response.filter((bank) =>
				bank.city.toLowerCase().includes(city.toLowerCase())
			);
			console.log(filteredCities);
			setFilter(filteredCities);
		} else {
			setFilter(houses);
		}
	}, [city]);
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

	const handleCategoryChange = (e) => {
		setCategory(e.target.value);

		// setCategory(value);
	};

	const handleCityChange = (e) => {
		setCity(e.target.value);
	};

	const handlePriceChange = (e) => {
		setPrice(e.target.value);
	};

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
							<MenuItem value={citydown} key={idx}>
								{citydown}
							</MenuItem>
						);
					})}
				</TextField>
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
							<MenuItem key={idx} value={category}>
								{category}
							</MenuItem>
						);
					})}
				</TextField>
				<Styledbutton
					variant="contained"
					onClick={() => {
						alert("clicked");
					}}
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
				<div>loading</div>
			)}
		</>
	);
};

export default Houses;
