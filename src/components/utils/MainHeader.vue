<template>
    <header class="header h-70-px">
		<div class="main-bar bg-red h-100  d-flex align-items-center">
			<div class="container   ">
				<div class="header-content">
					<div class="left-content">
                        <slot name="left_content"></slot>
					</div>
					<div class="mid-content ">
                        <slot name="mid_content"></slot>
                    </div>
					<div class="right-content">
                        <slot name="right_content"></slot>
                    </div>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
</script>