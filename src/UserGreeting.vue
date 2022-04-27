<template>
  <div class="h3 mb-0">
    {{ greeting }}, {{ name }}! {{ emojiString }} <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UserGreeting',
  props: {
    name: !String,
    emoji: Boolean,
  },
  created() {
    const currentHour = (new Date).getHours()

    const greetings = {
      morning: {
        greeting: "Bom dia",
        time: [5, 12],
        emoji: '⛅️',
        /*cardColor: "light-blue accent-3",
        cardDark: true,
        icon: "mdi-white-balance-sunny",
        iconColor: "amber",*/
      },
      afternoon: {
        greeting: "Boa tarde",
        time: [12, 18],
        emoji: '☀️',
        /*cardColor: "amber accent-2",
        cardDark: false,
        icon: "mdi-white-balance-sunny",
        iconColor: "orange",*/
      },
      evening: {
        greeting: "Boa noite",
        time: [18, 4],
        emoji: '🌙',
        /*cardColor: "deep-purple accent-2",
        cardDark: true,
        icon: "mdi-moon-waning-crescent",
        iconColor: "amber",*/
      }
    }

    this.getGreetingTime = function (currentHour, greetings) {
      for (const daytime in greetings) {
        if(greetings[daytime].time[0] <= currentHour && greetings[daytime].time[1] > currentHour) {
          return greetings[daytime]
        }
      }
    }

    this.changeGreeting = function (daytime) {
      this.greeting = daytime.greeting
      this.emojiCode = daytime.emoji
      /*this.cardColor = daytime.cardColor
      this.cardDark = daytime.cardDark
      this.greeting = daytime.greeting
      this.icon = daytime.icon
      this.iconColor = daytime.iconColor*/
    }

    this.changeGreeting(
      this.getGreetingTime(currentHour, greetings)
    );
  },
  computed: {
    emojiString() {
      return this.emoji ? this.emojiCode : ''
    }
  }
}
</script>
