import { SafeAreaView } from "react-native-safe-area-context"
import { useEffect, useState } from "react"
import { Image, ScrollView, Text, View } from "react-native"

import CTAButtonList from "../../shared/CTAButtonList"
import { AppStyles } from "../../styles/AppStyles"
import LogDaily from "./LogDaily"
import { getFilteredLog, getLogToday, getLogs } from "../../realm/crud/LogCRUD"

const LogMain = ( { navigation } ) => {
  const [ logs, setLogs ] = useState( [] )
  const [ filterDate, setFilterDate ] = useState( null )

  useEffect( () => {
    filterDate ? setLogs( getFilteredLog( filterDate ) ) : setLogs( getLogs() ) 
  }, [ filterDate ] )

  const {
    container,
    logMainContainer,
    logMainLeft,
    logMainRight,
    logScroll,
    logMonth,
    logDailyContainer,
    bookmarkContainer,
    bookmark,
    noValueLabel
  } = AppStyles

  return (
    <SafeAreaView style={ container }>
      <View style={ logMainContainer }>
        <View style={ logMainLeft }>
          <ScrollView
            style={ logScroll }
            showsVerticalScrollIndicator={ false }
          >
            {
              logs && logs.length ?
              logs.map( ( log, index ) => (
                <View key={ index }>
                  <Text style={ logMonth }>{ log.month }</Text>
                  <View key={ index } style={ logDailyContainer }>
                  {
                    log.monthLog.map( ( item, index ) => (
                      <LogDaily key={ index } log={ item } navigation={ navigation } isCompleted={ item.description } />
                    ))
                  }
                  </View>
                </View>
              ))
              : <Text style={ noValueLabel }>No Logs</Text>
            }
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
            hasLogToday={ getLogToday() }
            setFilterDate={ setFilterDate }
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LogMain