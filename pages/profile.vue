<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }" ref="observer">

      <b-form @submit.stop.prevent="handleSubmit(submit)" @reset="reset">

        <ValidationProvider
            name="Name"
            :rules="{required: true, username: /^[a-zA-Z0-9\-]+$/ }"
            v-slot="validationContext"
        >
          <b-form-group
              id="input-group-2"
              label="Tu nombre:"
              label-for="input-2"
          >
            <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder="Introduzca nombre"
                :state="getValidationState(validationContext)"
            ></b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">{{
                validationContext.errors[0]
              }}
            </b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider
            name="Email"
            rules="required|email"
            v-slot="validationContext"
        >
          <b-form-group
              id="input-group-1"
              label="Email:"
              label-for="input-1"
          >
            <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Introduzca email"
                :state="getValidationState(validationContext)"
            ></b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">{{
                validationContext.errors[0]
              }}
            </b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>


        <ValidationProvider
            name="Phone"
            :rules="{required: true, phone: /^[0-9\s]+$/ }"
            v-slot="validationContext"
        >
          <b-form-group id="input-group-3" label="Teléfono:" label-for="input-3">
            <b-form-input
                id="input-3"
                v-model="form.phone"
                required
                placeholder="Introduzca su teléfono"
                :state="getValidationState(validationContext)"
            ></b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">{{
                validationContext.errors[0]
              }}
            </b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <b-alert class="my-4" :show="alert.show" :variant="alert.type">{{ alert.message }}</b-alert>

        <b-button type="submit" variant="primary">Enviar</b-button>
        <b-button type="reset" variant="danger">Reiniciar</b-button>
      </b-form>
    </ValidationObserver>

  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: 'profile',

  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider
  },

  data() {
    return {
      form: {
        email: '',
        name: '',
        phone: '',
      },
      alert: {
        show: false,
        message: '',
        type: ''
      }
    }
  },

  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    submit() {
      // TODO: Sanear this.form
      // TODO: Usar toastr https://www.npmjs.com/package/@nuxtjs/toast

      this.$axios.post('https://jsonplaceholder.typicode.com/users', this.form)
          .then(response => {
            this.reset();
            this.alert = {
              show: true,
              message: 'Éxito registrando el usuario',
              type: 'success',
            }

            localStorage.setItem('registered_user', JSON.stringify(response.data));
          })
          .catch(() => {
            this.alert = {
              show: true,
              message: 'Error',
              type: 'danger',
            }
          });
    },

    reset() {
      this.form.email = '';
      this.form.name = '';
      this.form.phone = '';
      this.alert.show = false;
      this.$refs.observer.reset();
    }
  }
}
</script>