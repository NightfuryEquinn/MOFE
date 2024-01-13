import { Image, Text, TouchableOpacity, View, Dimensions } from "react-native"
import { AppStyles } from "../../styles/AppStyles"
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react"

const FuryMain = ( { navigation } ) => {
  const [ taps, setTaps ] = useState( 0 )
  const [ hypeLevel, setHypeLevel ] = useState( "Sleepy" )
  const [ imageSource, setImageSource ] = useState( require( '../../assets/stickers/dog_sleep.png' ) )

  const [ furyElement, setFuryElement ] = useState( { width: 0, height: 0 } )
  const [ viewPosition, setViewPosition ] = useState( { left: 100, top: 100 } )
  
  const onLayout = ( event ) => {
    const { width, height } = event.nativeEvent.layout
    setFuryElement( { width, height } )
  }

  const getRandomPosition = () => ({
    left: Math.random() * ( furyElement.width - 125 ),
    top: Math.random() * ( furyElement.height - 125 )
  })

  const handleTap = () => {
    setTaps( prev => prev + 1 )
    setViewPosition( getRandomPosition() ) 

    if( taps > 50 ) setHypeLevel( "Calm" )
    if( taps === 69 || taps >= 69 ) { 
      setHypeLevel( "Blow me, Lick you" ) 
      setImageSource( require( '../../assets/stickers/dog_ass.png' ) )
    }
    if( taps > 100 ) setHypeLevel( "Awake" ) 
    if( taps === 114 || taps >= 114 ) {
      setHypeLevel( "Your birthday" ) 
      setImageSource( require( '../../assets/stickers/dog_happy.png' ) )
    }
    if( taps > 200 ) setHypeLevel( "Mild" )
    if( taps > 400 ) { 
      setHypeLevel( "Excited" )
      setImageSource( require( '../../assets/stickers/dog_curl.png' ) )
    }
    if( taps > 500 ) setImageSource( require( '../../assets/stickers/dog_belly.png' ) )
    if( taps === 520 || taps >= 520 ) { 
      setHypeLevel( "Bubu Loves Babu" ) 
      setImageSource( require( '../../assets/stickers/dog_happy.png' ) )
    }
    if( taps > 750 ) {
      setHypeLevel( "Thrilled" )
      setImageSource( require( '../../assets/stickers/dog_think.png' ) )
    }
    if( taps > 1000 ) setHypeLevel( "Exhilarated" )
    if( taps > 1250 ) setHypeLevel( "Estatic" )
    if( taps === 1314 || taps >= 1314 ) {
      setHypeLevel( "Forever Love from Bubu" )
      setImageSource( require( '../../assets/stickers/dog_happy.png' ) )
    }
    if( taps > 1500 ) setHypeLevel( "Electrified" )
    if( taps > 1750 ) setHypeLevel( "Jubilant" )
    if( taps > 2000 ) setHypeLevel( "Godlike" )
    if( taps > 3000 || taps >= 3000 ) { 
      setHypeLevel( "Love You 3000" )
      setImageSource( require( '../../assets/stickers/dog_happy.png' ) )
    }
    if( taps > 5000 ) {
      setHypeLevel( "BOOOOM!!!" )
      setImageSource( require( '../../assets/stickers/dog-house.png' ) )
    }
  }

  const {
    container,
    furyContainer,
    furyHeader,
    furyTitle,
    ctaButtonContainer,
    ctaButton,
    furyContentContainer,
    furyTapText,
    furyTapTextMinor,
    furyArea,
    dogeSticker
  } = AppStyles

  return (
    <SafeAreaView style={ container }>
      <View style={ furyContainer }>
        <View style={ furyHeader }>
          <Text style={ furyTitle }>RELEASE YOUR DOGE</Text>
          <TouchableOpacity
            activeOpacity={ 0.75 }
            onPress={ () => {
              navigation.goBack()
            }}
            style={ ctaButtonContainer }
          >
            <Image
              source={ require( '../../assets/icons/return.png' ) }
              resizeMode='contain'
              style={ ctaButton }
            />
          </TouchableOpacity>
        </View>

        <View style={ furyContentContainer }>
          <Text style={ furyTapText }>{ taps } TAPS</Text>
          <Text style={ furyTapTextMinor }>HYPE LEVEL: { hypeLevel }</Text>

          <TouchableOpacity
            activeOpacity={ 1 }
            onPress={ handleTap }
            onLayout={ onLayout }
            style={ furyArea }
          >
            <Image 
              source={ imageSource }
              resizeMode="cover"
              style={ [ dogeSticker, viewPosition ] }
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default FuryMain