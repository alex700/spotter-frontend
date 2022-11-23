import { createApp } from 'vue'
import App from './App.vue'
import './styles/app.css';
const app = createApp(App)

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

app.config.globalProperties.$filters = {
    str_limit(value, size) {
        if (!value) return '';
        value = value.toString();

        if (value.length <= size) {
            return value;
        }
        return value.substr(0, size) + '...';
    },
    currencyUSD(value) {
        return currencyFormatter.format(value)
    }
}

app.mount('#app')