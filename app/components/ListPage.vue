<template>
  <Page>
    <StackLayout>
      <ListView for="item in items" @itemTap="onItemTap">
        <v-template>
          <StackLayout orientation="horizontal">
            <Image v-if="item.thumbnail"
                   :src="item.thumbnail" stretch="none" class="m-5" />
            <Label :text="item.title" class="m-5" />
          </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
  import { fetch } from 'tns-core-modules/fetch';

  export default {
    name: 'ListPage',
    data () {
      return {
        items: [],
      };
    },
    methods: {
      onItemTap ({ index }) {
        const item = this.items[index];
        console.log(`"${item.text}" tapped`);
      }
    },
    created () {
      fetch('https://www.reddit.com/r/all.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.items = [];
          data.data.children.forEach(item => {
            this.items.push(item.data);
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
</script>
