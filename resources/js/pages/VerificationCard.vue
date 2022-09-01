<template>
	<div class="d-flex align-items-center justify-content-center overflow-auto w-100 h-100 position-fixed">
		<div class="m-auto card custom-card">
			<div class="card-body">
				<div class="custom-card_body-header">
					<div><img src="/images/card-letter.png" class="rounded mx-auto d-block custom-card_body-header__img" alt="image"></div>
					<div class="custom-card_body-header__title">Identify Verification</div>
					<div class="custom-card_body-header__subtitle">We not save your data. We just verify you</div>
				</div>
				<div class="col-md-12 text-center">
					<ul class="list-group" v-if="errors.length">
						<li v-for="error in errors" class="list-group-item list-group-item-danger">{{ error }}</li>
					</ul>
				</div>
				<div class="form-group">
					<label for="number" class="custom-card_label text-uppercase">Card Number</label>
					<input type="text" v-model="cardNumber" class="form-control custom-card_input" id="number" placeholder="Ex. 0000 0000 0000 0000">
				</div>
				<div class="form-group">
					<label for="name" class="custom-card_label text-uppercase">Cardholder name</label>
					<input type="text" v-model="name" class="form-control custom-card_input" id="name" placeholder="Ex. Robert Smith">
				</div>
				<div class="d-flex">
					<div class="form-group w-50 pr-2">
						<label for="date" class="custom-card_label text-uppercase">Expire Date</label>
						<input type="text" v-model="date" class="form-control custom-card_input" id="date" placeholder="Ex. MM/DD">
					</div>
					<div class="form-group w-50 pl-2">
						<label for="cvv" class="custom-card_label text-uppercase">Cvv code</label>
						<input type="text" v-model="cvv" class="form-control custom-card_input" id="cvv" placeholder="Ex. 000">
					</div>
				</div>

				<button type="submit" class="btn btn-primary w-100" @click="verification">Authorization</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Verification",
	data() {
		return {
			cardNumber: null,
			name: null,
			date: null,
			cvv: null,
			errors: []
		}
	},
	methods: {
		verification() {
			this.errors = [];
			let month = null;
			let year = null;

			if (this.date) {
				let date = this.date.split('/');
				month = date[0];
				year = date[1];
			}

			this.$http.post('api/verification-card', {
				cardNumber: this.cardNumber,
				name: this.name,
				month: month,
				year: year,
				cvv: this.cvv
			}).then(response => {
				this.$store.dispatch('user/setVerifyCard', true)
				this.$router.push('registration-success')
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