<template>
  <div>
    <div class="card">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h5>Choose services</h5>
      </div>

      <div class="card-bg-secondary">
        <div
          class="d-flex"
          v-for="(chunk, index) in chunkServices"
          :key="index"
        >
          <div
            class="w-25 border-right border-bottom"
            v-for="(service, index) in chunk"
            :key="index"
            @click="selectService(service)"
            :class="{'cursor-pointer': service.name}"
          >
            <div class="p-4">
              <small class="text-uppercase">{{ service.name || '&nbsp;' }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'Services',
  data () {
    return {
      services: [
        {
          name: 'Api',
          path: 'horizon',
          host: 'http://api.horizon.lc'
        },
        {
          name: 'Foo',
          path: 'foo/horizon',
          host: 'http://foo.horizon.lc'
        }
      ]
    }
  },
  computed: {
    chunkServices () {
      let chunkSize = 5
      let services = [...this.services]
      return services.concat.apply([],
        services.map(function (elem, i) {
          if (i % chunkSize) {
            return []
          } else {
            let chunk = services.slice(i, i + chunkSize)
            if (chunk.length < chunkSize) {
              for (let i = 0; i < chunkSize - chunk.length; i++) {
                chunk.push({})
              }
            }
            return [chunk]
          }
        })
      );
    }
  },
  methods: {
    selectService (service) {
      if (!service.name || !service.host) {
        return
      }
      window.Horizon = { ...service, ...{ 'basePath': `${service.host}/${service.path}` } }
      localStorage.setItem('horizon_app', JSON.stringify(window.Horizon))
      this.$eventBus.$emit('change_app', window.Horizon)
      this.$router.push({ 'name': 'dashboard' })
    }
  }
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>