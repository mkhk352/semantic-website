<template>
<div class="feature alternate ui stripe vertical segment">
  <div class="ui three column center aligned divided relaxed stackable grid container">
    <div class="row">
      <div class="column">
              <div class="ui card">
        <div class="image">
          <img :src="matt">
        </div>
        <div class="content">
          <div class="header">Matt Giampietro</div>
          <div class="meta">
            <a>Friends</a>
          </div>
          <div class="description">
            Matthew is an interior designer living in New York.
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
            Joined in 2013
          </span>
          <span>
            <i class="user icon"></i>
            75 Friends
          </span>
        </div>
      </div>
      </div>
      <div class="column">
              <div class="ui card">
        <div class="image">
          <img :src="molly">
        </div>
        <div class="content">
          <div class="header">Molly</div>
          <div class="meta">
            <span class="date">Coworker</span>
          </div>
          <div class="description">
            Molly is a personal assistant living in Paris.
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
            Joined in 2011
          </span>
          <span>
            <i class="user icon"></i>
            35 Friends
          </span>
        </div>
      </div>
      </div>
      <div class="column">
              <div class="ui card">
        <div class="image">
          <img :src="elyse">
        </div>
        <div class="content">
          <div class="header">Elyse</div>
          <div class="meta">
            <a>Coworker</a>
          </div>
          <div class="description">
            Elyse is a copywriter working in New York.
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
            Joined in 2014
          </span>
          <span>
            <i class="user icon"></i>
            151 Friends
          </span>
        </div>
      </div>
      </div>
    </div>
    </div>
</div>
</template>
<script>
  import Matt from '../assets/matthew.png';
  import Molly from '../assets/molly.png';
  import Elyse from '../assets/elyse.png';

export default {
    data() {
      return {
        matt: Matt,
        molly: Molly,
        elyse: Elyse,
      };
    },
};
</script>

<style scoped>
  .card{
    border: 0em;
  }
</style>

