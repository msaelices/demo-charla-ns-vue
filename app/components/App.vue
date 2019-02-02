<template>
    <Page>
        <ActionBar>
            <GridLayout width="100%" columns="auto, *">
                <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
                <Label class="title" text="Welcome to NativeScript-Vue!"  col="1"/>
            </GridLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <Label class="drawer-header" text="Drawer"/>

                <Label class="drawer-item" text="List Sample" @tap="goToListPage" />
                <Label class="drawer-item" text="Reverse Sample" @tap="goToReversePage" />
                <Label class="drawer-item" text="Tab Sample" @tap="goToTabPage" />
            </StackLayout>

            <GridLayout ~mainContent columns="*" rows="*">
                <Label class="message" :text="msg" col="0" row="0"/>
            </GridLayout>
        </RadSideDrawer>
    </Page>
</template>

<script lang="ts">
  import ListPage from './ListPage.vue';
  import TabPage from './TabPage.vue';
  import ReversePage from './ReversePage.vue';

  export default {
    data() {
      return {
        msg: 'Hello World!'
      }
    },
    methods: {
      goToListPage () {
        this.$navigateTo(ListPage);
      },
      goToReversePage () {
        this.$navigateTo(ReversePage);
      },
      goToTabPage () {
        this.$navigateTo(TabPage);
      }
    },
  };
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .title {
        text-align: left;
        padding-left: 16;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .drawer-header {
        padding: 50 16 16 16;
        margin-bottom: 16;
        background-color: #53ba82;
        color: #ffffff;
        font-size: 24;
    }

    .drawer-item {
        padding: 8 16;
        color: #333333;
        font-size: 16;
    }
</style>
