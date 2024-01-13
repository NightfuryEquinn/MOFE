import { SafeAreaView } from "react-native-safe-area-context"
import { AppStyles } from "../../styles/AppStyles"
import { useEffect, useState } from "react"
import { Image, ScrollView, Text, View } from "react-native"
import CTAButtonList from "../../shared/CTAButtonList"
import LogDaily from "./LogDaily"
import { getLogToday, getLogs } from "../../realm/crud/LogCRUD"
import moment from "moment"

const LogMain = ( { navigation } ) => {
  const [ hasLogToday, setHasLogToday ] = useState( false )
  const [ logs, setLogs ] = useState( [] )

  useEffect( () => {
    setLogs( getLogs() )
    setHasLogToday( getLogToday() )
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
              <Text style={ logMonth }>{ moment( Date.now() ).format( 'MMMM YYYY' ) }</Text>
              <View style={ logDailyContainer }>
                {
                  logs.map( ( log, index ) => (
                    <LogDaily key={ index } log={ log } navigation={ navigation } isCompleted={ log.description } />
                  ))
                }
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

          <CTAButtonList 
            navigation={ navigation } 
            manageViewName={ "LogManage" } 
            hasLogToday={ hasLogToday }
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LogMain