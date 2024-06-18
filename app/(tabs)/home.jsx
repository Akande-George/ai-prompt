import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import HomeHeader from "../../components/HomeHeader";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { getAllPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";

const Home = () => {
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    // make calls
    await refetch();
    setRefreshing(false);
  };
  console.log(posts);
  const DATA = [
    {
      id: 1,
      title: "First Test run",
    },
    {
      id: 2,
      title: "Second test run",
    },
  ];
  const postss = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <View>
      <SafeAreaView className="bg-primary h-full">
        <FlatList
          data={posts}
          keyExtractor={(item) => item.$id}
          renderItem={({ item }) => <VideoCard video={item} />}
          ListHeaderComponent={() => (
            <View className="my-6 px-4 space-y-6">
              <HomeHeader />
              <SearchInput />
              <View className="w-full flex-1 pt-5 pb-8">
                <Text className="text-gray-100 text-lg pb-3 font-pregular">
                  Latest Videos
                </Text>
                <Trending posts={postss ?? []} />
              </View>
            </View>
          )}
          ListEmptyComponent={() => (
            <EmptyState
              title="No videos found"
              subtitle="No videos created yet"
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </SafeAreaView>
    </View>
  );
};

export default Home;
