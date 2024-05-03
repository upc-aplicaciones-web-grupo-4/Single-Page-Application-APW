
import { ref, watch } from 'vue';

export default {
    userType: ref(null),

    setUserType(type) {
        this.userType.value = type;
    },

    watchUserType(callback) {
        watch(() => this.userType.value, callback);
    }
};