<template>
    <div>
        <h1 id="w-location">{{ weather.location }}</h1>
        <h3 class="text-dark" id="w-desc">{{ weather.desc }}</h3>
        <h3 id="w-string">{{ weather.string }}</h3>
        <!--<img id="w-icon"/>-->
        <ul class="list-group mt-3" id="w-details">
            <li class="list-group-item">{{ weather.humidity }}</li>
            <li class="list-group-item">{{ weather.pressure }}</li>
            <li class="list-group-item">{{ weather.windSpeed }}</li>
            <li class="list-group-item">{{ weather.windDirection }}</li>
            <li class="list-group-item">{{ weather.sunrise }}</li>
            <li class="list-group-item">Sunset:{{ weather.sunset }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            weather: Object,
        },
    };
</script>
