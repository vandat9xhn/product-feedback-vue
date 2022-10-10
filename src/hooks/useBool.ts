import { ref } from 'vue';

//
export const useBool = (initial_bool = false) => {
  const bool = ref(initial_bool);

  const toggleBool = () => {
    bool.value = !bool.value;
  };

  const setBool = (new_bool = true) => {
    bool.value = new_bool;
  };

  //

  return {
    bool,
    setBool,
    toggleBool,
  };
};
