<template>
  <Page>
    <ActionBar :title="message"></ActionBar>
    <StackLayout>
      <Button text="Reverse Message" @tap="reverseMessage"></Button>
    </StackLayout>
  </Page>
</template>
<script lang="ts">
export default {
  name: 'ReversePage',
  data () {
    return {
      message: 'Hello world'
    };
  },
  methods: {
    reverseMessage () {
      this.message = this.message.split('').reverse().join('');
    }
  }
}
</script>
