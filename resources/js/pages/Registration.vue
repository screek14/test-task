<template>
	<div class="d-flex align-items-center justify-content-center overflow-auto w-100 h-100 position-fixed">
		<div class="m-auto card custom-card">
			<div class="card-body">
				<div class="custom-card_body-header">
					<div><img src="/images/card-letter.png" class="rounded mx-auto d-block custom-card_body-header__img" alt="image"></div>
					<div class="custom-card_body-header__title">Registration</div>
					<div class="custom-card_body-header__subtitle">Create your new account</div>
				</div>
				<div class="col-md-12 text-center">
					<ul class="list-group" v-if="errors.length">
						<li v-for="error in errors" class="list-group-item list-group-item-danger">{{ error }}</li>
					</ul>
				</div>
				<div class="form-group">
					<label for="name" class="custom-card_label text-uppercase">Your Name</label>
					<input v-model="name" type="text" class="form-control custom-card_input" id="name" placeholder="Ex. Robert Smith">
				</div>
				<div class="form-group">
					<label for="email" class="custom-card_label text-uppercase">Email address</label>
					<input v-model="email" type="email" class="form-control custom-card_input" id="email" placeholder="Ex. example@gmail.com">
				</div>
				<div class="form-group">
					<label for="phone" class="custom-card_label text-uppercase">Phone number</label>
					<input v-model="phone" type="text" class="form-control custom-card_input" id="phone" placeholder="Ex. +972-54-1234567">
				</div>
				<div class="form-group form-check">
					<input v-model="checkbox" type="checkbox" class="form-check-input" id="check">
					<label class="form-check-label" for="check">I accept the Term of Conditions</label>
				</div>

				<button type="submit" class="btn btn-primary w-100" @click="registration">Register Account</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Registration",
	data() {
		return {
			name: null,
			email: null,
			phone: null,
			checkbox: false,
			errors: []
		}
	},
	methods: {
		registration() {
			this.errors = [];
			this.$http.post('api/registration', {
				name: this.name,
				email: this.email,
				phone: this.phone,
				checkbox: this.checkbox
			}).then(response => {
				this.$store.dispatch('user/setRegistration', true)
				this.$router.push('verification-card')
			}).catch(error => {
				if (error.response.data.errors) {
					let errors = Object.values(error.response.data.errors).flat()
					errors.forEach(elem => this.errors.push(elem))
				} else {
					this.errors.push(error.response.data.error)
				}
			})
		}
	}
}
</script>

<style scoped>

</style>