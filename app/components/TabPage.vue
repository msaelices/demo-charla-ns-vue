<template>
  <Page>
    <ActionBar title="Tabs Sample" icon="">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="goBack" />
      <ActionItem icon="" text="Left" ios.position="left" @tap="" />
      <ActionItem icon="" text="Right" ios.position="right" @tap="" />
    </ActionBar>
    <TabView :selectedIndex="tabIndex">
      <TabViewItem title="First">
        <StackLayout>
          <Label text="This is Label in Tab 1" />
        </StackLayout>
      </TabViewItem>
      <TabViewItem title="Second">
        <StackLayout>
          <Label text="This is Label in Tab 2" />
        </StackLayout>
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script lang="ts">
export default {
  name: 'TabPage',
  data () {
    return {
      tabIndex: 1,
    };
  },
  methods: {
  }
};
</script>
