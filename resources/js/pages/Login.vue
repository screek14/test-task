<template>
	<div class="d-flex align-items-center justify-content-center overflow-auto w-100 h-100 position-fixed">
		<div class="m-auto card custom-card">
			<div class="card-body">
				<div class="custom-card_body-header">
					<div><img src="/images/card-letter.png" class="rounded mx-auto d-block custom-card_body-header__img" alt="image"></div>
					<div class="custom-card_body-header__title">Let's begin</div>
					<div class="custom-card_body-header__subtitle">We'll verify you details</div>
				</div>
				<div class="col-md-12 text-center">
					<ul class="list-group" v-if="message">
						<li class="list-group-item list-group-item-danger">{{ message }}</li>
					</ul>
				</div>
				<div class="form-group">
					<label for="customerId" class="custom-card_label text-uppercase">Customer ID</label>
					<input type="text" v-model="customerId" class="form-control custom-card_input" id="customerId" placeholder="Ex. 123456789">
				</div>
				<button type="submit" :disabled="disableButton" class="btn btn-primary w-100" @click="login">Submit</button>

				<div class="custom-card_body-footer">
						<div class="custom-card_body-footer__text">You first time?</div>
						<router-link to="registration" href="#" class="custom-card_body-footer__link">Click here!</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Login",
	data() {
		return {
			customerId: null,
			counter: 0,
			disableButton: false,
			message: null
		}
	},
	methods: {
		login() {
			this.message = null
			this.$http.post('api/login', {customerId: this.customerId})
				.then(response => {
					if (response.data.result) {
						this.$store.dispatch('user/setLoggedIn', true)
						this.$store.dispatch('user/setUserData', response.data.user)
						this.$router.push('verification-code')
					}
				})
				.catch(error => {
					this.counter++;

					this.message = error.response.data.message ?? 'Something went wrong'

					if (this.counter === 5) {
						this.disableButton = true;
						setTimeout(() => {
							this.disableButton = false;
							this.counter = 0;
						}, 30000)
					}
				})
		}
	}
}
</script>

<style scoped>

</style>