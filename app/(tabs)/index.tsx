import { TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native'

import { Text, View } from '../../components/Themed'
// import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function TabOneScreen() {
  // const [number, setNumber] = useState(0)

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput style={styles.input} placeholder="What would you like do?" />
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="#060047" />
        </TouchableOpacity>
      </View>
      <View style={styles.navigation}>
        <Text style={styles.textBoldUnderline}>For You</Text>
        <Text>Podcast</Text>
        <Text>Radio</Text>
        <Text>Audio Book</Text>
      </View>
      <View style={styles.banner}>
        <View style={styles.textsBanner}>
          <Text style={styles.innerBannerTitle}>Products App Design</Text>
          <Text style={styles.innerBannerSubTitle}>
            Listen to the future of UI/UX
          </Text>
          <View style={styles.innerBannerCircles}>
            <View style={styles.circle}>
              <Ionicons name="star" size={16} color="#E90064" />
            </View>
            <View style={styles.circle}>
              <Ionicons name="airplane" size={16} color="#E90064" />
            </View>
          </View>
          <Text style={styles.innerBannerSubTitle}>Guests: Larry + Tom</Text>
        </View>
        <Image
          source={require('../../assets/images/bro.png')}
          style={{ width: 157.65, height: 110 }}
          alt="Image"
        />
      </View>
      <View style={styles.categories}>
        <View style={styles.innerCategories}>
          <Text style={styles.innerCategoriesText}>Popular Categories</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#060047" />
        </View>
        <View style={styles.innerCategoriesSlides}>
          <View style={styles.innerCategoriesSlidesSquare}>
            <Ionicons name="star-outline" size={24} color="#865DFF" />
          </View>
          <View style={styles.innerCategoriesInnerSlidesText}>
            <Text style={styles.innerCategoriesInnerSlidesTextTitle}>
              Self Development
            </Text>
            <Text style={styles.innerCategoriesInnerSlidesTextSubTitle}>
              150 + Podcasts
            </Text>
          </View>
        </View>
      </View>

      {/* <TextInput style={styles.input} placeholder='Search...' />
        <TouchableOpacity>
          <Ionicons name='search' size={20} color='#060047'  />
        </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  textWhite: {
    color: '#fff',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    backgroundColor: '#E90064',
    padding: 14,
    borderRadius: 8,
  },
  searchBar: {
    width: '80%',
    paddingVertical: 12,
    paddingHorizontal: 24, // rgba(6, 0, 71, 0.04)
    backgroundColor: 'rgba(6, 0, 71, 0.04)',
    marginTop: 36,
    borderRadius: 16,
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginHorizontal: 2,
    position: 'relative',
    marginBottom: 34,
  },
  input: {
    width: '100%',
    textAlign: 'left',
    paddingHorizontal: 24,
    borderRadius: 16,
    // alignSelf: 'flex-start',
  },
  navigation: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    marginTop: 24,
  },
  textBoldUnderline: {
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#E90064',
    borderRadius: 999,
  },
  banner: {
    backgroundColor: '#E90064',
    width: '90%',
    padding: 24,
    alignSelf: 'center',
    marginTop: 24,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textsBanner: {
    flexDirection: 'column',
    backgroundColor: '#E90064',
    gap: 12,
  },
  innerBannerCircles: {
    flexDirection: 'row',
    backgroundColor: '#E90064',
    width: '100%',
    gap: 10,
  },
  innerBannerTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
  },
  circle: {
    padding: 4,
    borderRadius: 999,
    backgroundColor: '#fff',
    borderWidth: 1,
  },
  innerBannerSubTitle: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '400',
  },
  categories: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 24,
    padding: 24,
    gap: 20,
  },
  innerCategories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerCategoriesText: {
    fontSize: 18,
    fontWeight: '700',
  },
  innerCategoriesSlides: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: 'rgba(134, 93, 255, 0.10)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#865DFF',
    flexDirection: 'row',
    gap: 16,
    width: '70%',
  },
  innerCategoriesSlidesSquare: {
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: '#865DFF',
  },
  innerCategoriesInnerSlidesText: {
    backgroundColor: 'transparent',
    gap: 16,
    justifyContent: 'flex-start',
  },
  innerCategoriesInnerSlidesTextTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  innerCategoriesInnerSlidesTextSubTitle: {
    fontWeight: '400',
    fontSize: 12,
  },
})

// "rgba(6, 0, 71, 0.04)"
