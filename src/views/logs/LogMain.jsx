import { SafeAreaView } from "react-native-safe-area-context"
import { AppStyles } from "../../styles/AppStyles"
import { useEffect, useState } from "react"
import { AppState, Image, ScrollView, Text, View } from "react-native"
import realmDb from "../../realm/RealmDB"
import CTAButtonList from "../../shared/CTAButtonList"
import LogDaily from "./LogDaily"

const LogMain = ( { navigation } ) => {
  const [ appState, setAppState ] = useState( AppState.currentState )
  const [ logs, setLogs ] = useState( [] )

  const handleAppStateChange = ( nextAppState ) => {
    if( appState.match( /inactive | background/ ) && nextAppState === 'active' ) {
      const logSchema = realmDb.objects( 'Log' )
      const logArray = logSchema.map( log => ( { ...log } ) )

      setLogs( logArray )
    }

    setAppState( nextAppState )
  }

  useEffect( () => {
    AppState.addEventListener( 'change', handleAppStateChange )

    console.log( `All Logs -- ${ logs }` )
  }, [])

  const {
    container,
    logMainContainer,
    logMainLeft,
    logMainRight,
    logScroll,
    logMonth,
    logDailyContainer,
    bookmarkContainer,
    bookmark
  } = AppStyles

  return (
    <SafeAreaView style={ container }>
      <View style={ logMainContainer }>
        <View style={ logMainLeft }>
          <ScrollView
            style={ logScroll }
            showsVerticalScrollIndicator={ false }
          >
            <View>
              <Text style={ logMonth }>NOVEMBER 2023</Text>
              <View style={ logDailyContainer }>
                <LogDaily navigation={ navigation } isCompleted={ false } />
                <LogDaily navigation={ navigation } isCompleted={ false } />
                <LogDaily navigation={ navigation } isCompleted={ false } />
                <LogDaily navigation={ navigation } isCompleted={ true } />
                <LogDaily navigation={ navigation } isCompleted={ true } />
              </View>
            </View>
          </ScrollView>

          <Image
            source={ require( "../../assets/images/seaside.jpg" ) }
            style={{ 
              width: 'fit-content', 
              height: 120,
              resizeMode: 'cover',
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20
            }}
          />
        </View>
        <View style={ logMainRight }>
          <View style={ bookmarkContainer }>
            <Text style={ bookmark }>M</Text>
            <Text style={ bookmark }>Y</Text>
            <Text style={ bookmark }>L</Text>
            <Text style={ bookmark }>O</Text>
            <Text style={ bookmark }>G</Text>
            <Text style={ bookmark }>S</Text>
          </View>

          <CTAButtonList navigation={ navigation } manageViewName={ "LogManage" } />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LogMain