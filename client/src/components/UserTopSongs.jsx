import { useState, useEffect } from "react";
import axios from "axios";
import { ListArtists } from "./ListArtists";
import { ListTracks } from "./ListTracks";
import { RecommendedArtists } from "./RecommendedArtists";

export const UserTopSongs = () => {
	const [topArtists, setTopArtists] = useState([]);
	const [topTracks, setTopTracks] = useState([]);
	const [recommendedArtists, setRecommendedArtists] = useState([]);

	// refactor the below to only async/await (rmb that using async/await eliminates promise chaining)
	const retrieveTopArtistsFromUser = async (accessToken) => {
		try {
			const response = await axios.get("http://localhost:3001/mostlistened/artists", { params: { accessToken }});

			setTopArtists(response.data.topArtists);
		} catch (err) {
			console.log(err);
		}
	};

	// const retrieveTopArtistsFromUser = async (accessToken) => {
	// 	await axios
	// 		.get("http://localhost:3001/mostlistened/artists", {
	// 			params: { accessToken },
	// 		})
	// 		.then((res) => {
	// 			setTopArtists(res.data.topArtists);
	// 			// console.log(res.data);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

	const retrieveTopTracksFromUser = async (accessToken) => {
		await axios
			.get("http://localhost:3001/mostlistened/tracks", {
				params: { accessToken },
			})
			.then((res) => {
				setTopTracks(res.data.topTracks);
				console.log(res.data.msg);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		if (!sessionStorage.getItem("accessToken")) return;

		retrieveTopArtistsFromUser(sessionStorage.getItem("accessToken"));
		retrieveTopTracksFromUser(sessionStorage.getItem("accessToken"));
	}, [sessionStorage.getItem("accessToken")]);

	return (
		<div className="user-top-container">
			<div className="user-top-artists">
				<h1>Your Top 10 Artists</h1>
				<ListArtists userInfo={topArtists} />
			</div>

			<div className="user-top-tracks">
				<h1>Top Tracks</h1>
				<ListTracks userInfo={topTracks} />
			</div>

			<div className="user-recommended-artists">
				<h1>Recommended Artists</h1>
				<RecommendedArtists userInfo={recommendedArtists} />
			</div>
		</div>
	);
};
