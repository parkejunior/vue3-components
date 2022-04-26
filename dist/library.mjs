import { resolveComponent, openBlock, createBlock, withCtx, createVNode, createElementVNode, toDisplayString, createTextVNode } from 'vue';

var script = {
  name: 'UserGreeting',
  props: {
    name: !String
  },
  created() {
    const currentHour = (new Date).getHours();

    const greetings = {
      morning: {
        greeting: "Bom dia",
        time: [5, 12],
        cardColor: "light-blue accent-3",
        cardDark: true,
        icon: "mdi-white-balance-sunny",
        iconColor: "amber",
      },
      afternoon: {
        greeting: "Boa tarde",
        time: [12, 18],
        cardColor: "amber accent-2",
        cardDark: false,
        icon: "mdi-white-balance-sunny",
        iconColor: "orange",
      },
      evening: {
        greeting: "Boa noite",
        time: [18, 4],
        cardColor: "deep-purple accent-2",
        cardDark: true,
        icon: "mdi-moon-waning-crescent",
        iconColor: "amber",
      }
    };

    this.getGreetingTime = function (currentHour, greetings) {
      for (const daytime in greetings) {
        if(greetings[daytime].time[0] <= currentHour && greetings[daytime].time[1] > currentHour) {
          return greetings[daytime]
        }
      }
    };

    this.changeGreeting = function (daytime) {
      this.greeting = daytime.greeting;
      this.cardColor = daytime.cardColor;
      this.cardDark = daytime.cardDark;
      this.greeting = daytime.greeting;
      this.icon = daytime.icon;
      this.iconColor = daytime.iconColor;
    };

    this.changeGreeting(
      this.getGreetingTime(currentHour, greetings)
    );
  },
};

const _hoisted_1 = { class: "text-h4" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card = resolveComponent("v-card");

  return (openBlock(), createBlock(_component_v_card, {
    color: _ctx.cardColor,
    dark: _ctx.cardDark
  }, {
    default: withCtx(() => [
      createVNode(_component_v_card_title, { class: "justify-space-between" }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, toDisplayString(_ctx.greeting) + ", " + toDisplayString($props.name) + "! ", 1 /* TEXT */),
          createVNode(_component_v_icon, {
            color: _ctx.iconColor,
            size: "48px"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.icon), 1 /* TEXT */)
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["color"])
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["color", "dark"]))
}

script.render = render;
script.__file = "src/UserGreeting.vue";

var components = { UserGreeting: script };

const plugin = {
  install(Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
};

export { plugin as default };
