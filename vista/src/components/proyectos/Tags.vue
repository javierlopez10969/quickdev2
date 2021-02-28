<template>
    <div>
        <h6> Añada sus etiquetas</h6>
		<div col>
			<div>
				<input class="rounded-pill" placeholder="Ingrese etiquetas" type="text" v-model="tag" req>
			</div>
			<div>
				<div class="tag color4 rounded-pill"  @click="comprobarTag()">Añadir</div>
			</div>
		</div>
        <div>
		</div>
        <div class = "mt-5"></div>
        <div class="mt-5">
            <div row v-for="(_tag, index) in etiquetas" :key="index" class="tag rounded-pill" @click="removeTag(index)">{{ _tag }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:['etiquetas'],
    data() {
        return {            
		tag: '',
        }
    },
	methods: {
		addTag(tag) {
			this.etiquetas.push(tag);
		},
		removeTag(index) {
			this.etiquetas.splice(index, 1);
		},
		tagExists(tag) {
			return this.etiquetas.indexOf(tag) !== -1;
		},
		comprobarTag() {
            let tag = this.tag.replace(/,/g, '');
            if ( !this.tagExists(tag) && this.tag!='') {
                this.addTag(tag);
                this.tag = '';
            }

		}
	},
    updated() {
        this.$emit('update:etiquetas', this.etiquetas);
    },
}
</script>
<style>
.tag {
		position: relative;
		display: inline-block;
		margin: 0 10px 10px 0;
		padding: 8px 30px 8px 12px;
		color: #333;
		background: #fff;
		border: 1px solid #0064b7;
		border-radius: 5px;
		cursor: pointer;
		&:after {
			position: absolute;
			right: 8px;
			color: #b4252d;
			content: '\00d7';
		}
	}
</style>
