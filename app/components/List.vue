<template>
  <Page>
    <StackLayout>
      <ListView for="item in items" @itemTap="onItemTap">
        <v-template>
          <Label :text="item.text" />
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
  export default {
    name: 'List',
    data () {
      return {
        items: [
          {
            text: 'Item 1'
          },
          {
            text: 'Item 2'
          },
          {
            text: 'Item 3'
          },
          {
            text: 'Item 4'
          },
        ],
      };
    },
    methods: {
      onItemTap ({ index }) {
        const item = this.items[index];
        console.log(`"${item.text}" tapped`);
      }
    }
  };
</script>
