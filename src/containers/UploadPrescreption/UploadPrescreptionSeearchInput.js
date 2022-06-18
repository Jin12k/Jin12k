// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet,
//   SafeAreaView,
// } from 'react-native';
// import axios from 'axios';

// const API_KEY = 'AIzaSyBPjDlsHYhWtjt3FxgRPnTMXN-qJZ9hz0s';
// export default class MapInputField extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchKeyword: '',
//       searchResults: [],
//       isShowingResults: false,
//     };
//   }

//   searchLocation = async (text) => {
//     this.setState({searchKeyword: text});
//     axios
//       .request({
//         method: 'post',
//         url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${API_KEY}&input=${this.state.searchKeyword}`,
//       })
//       .then((response) => {
//         console.log(response , "map api response");
//         this.setState({
//           searchResults: response.data.predictions,
//           isShowingResults: true,
//         });
//       })
//       .catch((e) => {
//         console.log(e.response);
//       });
//   };

//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <View 
//         style={styles.autocompleteContainer}
//         >
//           <TextInput
//             placeholder="Search for an address"
//             returnKeyType="search"
//             style={styles.searchBox}
//             placeholderTextColor="#000"
//             onChangeText={(text) => this.searchLocation(text)}
//             value={this.state.searchKeyword}
//           />
//           {this.state.isShowingResults && (
//             <FlatList
//               data={this.state.searchResults}
//               renderItem={({item, index}) => {
//                 return (
//                   <TouchableOpacity
//                     style={styles.resultItem}
//                     onPress={() =>
//                       this.setState({
//                         searchKeyword: item.description,
//                         isShowingResults: false,
//                       })
//                     }>
//                     <Text>{item.description}</Text>
//                   </TouchableOpacity>
//                 );
//               }}
//               keyExtractor={(item) => item.id}
//               style={styles.searchResultsContainer}
//             />
//           )}
//         </View>
//         {/* <View style={styles.dummmy} /> */}
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   autocompleteContainer: {
//     zIndex: 1,
//   },
//   searchResultsContainer: {
//     width: 340,
//     height: 200,
//     backgroundColor: '#fff',
//     position: 'absolute',
//     top: 50,
//   },
//   dummmy: {
//     width: 600,
//     height: 200,
//     backgroundColor: 'hotpink',
//     marginTop: 20,
//   },
//   resultItem: {
//     width: '100%',
//     justifyContent: 'center',
//     height: 40,
//     borderBottomColor: '#ccc',
//     borderBottomWidth: 1,
//     paddingLeft: 15,
//   },
//   searchBox: {
//     width: 280,
//     height: 40,
//     fontSize: 18,
//     borderRadius: 5,
//     borderColor: '#aaa',
//     color: '#000',
//     backgroundColor: '#fff',
//     // borderWidth: 1.5,
//     paddingLeft: 15,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: 'lightblue',
//     alignItems: 'center',
//   },
// });

import React, { useState, useRef } from "react"
import { Dimensions, StyleSheet, Text, View } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import MapView, { Callout, Circle, Marker } from "react-native-maps"

export default function UpdatesMaps() {

	const [pin, setPin] = React.useState({
		latitude: 28.601296309799093,
		longitude: 77.36977127782859
	})
	const [region, setRegion] = React.useState({
		latitude: 28.601296309799093,
		longitude: 77.36977127782859,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	})
	var _mapView = MapView;
	const [state, setstate] = useState(null)
	// 28.601296309799093, 77.36977127782859
	const mapRef = useRef(null);
	const gotoPlace = (lat, lng) => {
		// goToPlace();
		const SearchedRegion = {
			latitude: lat,
			longitude: lng,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		};
		// const goToPlace = () => {
			//Animate the user to new region. Complete this animation in 3 seconds
			mapRef.current.animateToRegion(SearchedRegion, 3 * 1000);
		// };
		// let tempCoords = {
		// 	latitude: lat,
		// 	longitude: lng
		// }
		// MapView.animateCamera({
		// 	center: {
		// 		latitude: lat,
		// 		longitude: lng,
		// 	},
		// 	duration:
		// 		1000
		// });
	}

	return (
		<View style={{}}>
			<GooglePlacesAutocomplete
				placeholder="Search Places Here"
				fetchDetails={true}
				GooglePlacesSearchQuery={{
					rankby: "distance"
				}}
				onPress={(data, details = null) => {
					// 'details' is provided when fetchDetails = true
					console.log("google place data", details.geometry.location.lat)

					// setRegion({
					// 	latitude: details.geometry.location.lat,
					// 	longitude: details.geometry.location.lng,
					// 	latitudeDelta: 0.0922,
					// 	longitudeDelta: 0.0421
					// })

					gotoPlace(details.geometry.location.lat, details.geometry.location.lng)

				}}
				query={{
					key: "AIzaSyBPjDlsHYhWtjt3FxgRPnTMXN-qJZ9hz0s",
					language: "en",
					components: "country:ind",
					types: "establishment",
					location: `${region.latitude}, ${region.longitude}`
				}}
				styles={{
					container: { flex: 0, position: "absolute", width: "100%", zIndex: 1,borderColor:'black',marginHorizontal:15 },
					listView: { backgroundColor: "white" }
				}}
			/>
			<MapView
				style={styles.map}
				// initialRegion={{
				// 	latitude: region.latitude,
				// 	longitude: region.longitude,
				// 	latitudeDelta: 0.0922,
				// 	longitudeDelta: 0.0421
				// }}
				// ref = {(mapView) => { _mapView = mapView; }}
				ref={mapRef}
				initialRegion={region}
				onRegionChangeComplete={(region) => setRegion(region)}
				provider="google"
				showsUserLocation={true}
				zoomEnabled={true}
				showsMyLocationButton={true}
				zoomTapEnabled={true}
				zoomControlEnabled={true}
			>
				<Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
				<Marker
					coordinate={pin}
					pinColor="black"
					// draggable={true}
					// onDragStart={(e) => {
					// 	console.log("Drag start", e.nativeEvent.coordinates)
					// }}
					// onDragEnd={(e) => {
					// 	setPin({
					// 		// latitude: e.nativeEvent.coordinate.latitude,
					// 		// longitude: e.nativeEvent.coordinate.longitude
					// 		latitude: region.latitude, longitude: region.longitude
					// 	})
					// }}
				>
					<Callout>
						<Text>I'm here</Text>
					</Callout>
				</Marker>
				{/* <Circle center={pin} radius={1000} /> */}
			</MapView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	map: {
		marginTop: 40,
		width: Dimensions.get("window").width / 1.05,
		height: Dimensions.get("window").height / 1.5,
		// height: height / 3,
		// width: width / 1.17,
		backgroundColor: 'lightblue',
		borderRadius: 10,
		alignSelf: 'center'
	}
})