export const RecommendedTracks = ({ userInfo, loading }) => {
	return (
		<div className="recommended-container">
			{loading ? (
				<h3>Loading...</h3>
			) : (
				userInfo?.map((item, i) => (
					<div className="single-item" key={item.id}>
						<a href={item.spotify_url} target="_blank" rel="noopener noreferrer">
							<img src={item.image} alt="track_img" width={55} height={55} />
							<div>
								<p className="recommended-track-title"><strong>{item.track_title}</strong></p>
								<div className="recommended-track-artists">
									{item?.artists.map((artist) => (
										<p key={artist.id}>&nbsp;{artist.name}</p>
									))}
								</div>
							</div>
						</a>
					</div>
				))
			)}
		</div>
	);
};
