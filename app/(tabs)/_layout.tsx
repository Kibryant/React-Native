import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link, Tabs } from 'expo-router'
import { Pressable } from 'react-native'

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#865DFF',
      }}
    >
      {/* <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: () => <TabBarIcon name="home" color={'#E90064'} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="bell-o"
                    size={20}
                    color={'#E90064'}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="search-minus" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="search-minus" color={color} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Hello, World!',
          tabBarIcon: () => <TabBarIcon name="home" color={'#865DFF'} />,
          tabBarLabel: () => <Pressable></Pressable>,
          headerShown: false,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="bell-o"
                    size={20}
                    color={'#E90064'}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  )
}
