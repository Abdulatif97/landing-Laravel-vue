<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <div class="collapse navbar-collapse">
                    <div class="navbar-nav">
                        <router-link exact-active-class="active" to="/" class="nav-item nav-link">Home</router-link>
                        <router-link exact-active-class="active" to="/page" class="nav-item nav-link">Page</router-link>
                    </div>
                </div>
            </div>
        </nav>
        <div class="">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>

</script>
