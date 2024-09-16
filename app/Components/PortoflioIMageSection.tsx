import React from 'react'
import { Image, Text, View } from 'react-native'

export default function PortoflioIMageSection({styles , goalName}) {
  return (
    <View style={styles.imageContainer}>
    <Image
      source={{
        uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F270%2F486%2Foriginal%2Fvector-online-shopping-web-banner.jpg&f=1&nofb=1&ipt=f548f279d733dd8b330b2c4e142f01624d0060e0c5b13227d7426f181e777066&ipo=images',
      }}
      style={styles.image}
    />
    <View style={styles.imageTextContainer}>
      <Text style={styles.imageTitle}>{goalName}</Text>
    </View>
  </View>
  )
}
