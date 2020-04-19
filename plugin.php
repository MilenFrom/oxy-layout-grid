<?php

/**
 * Plugin Name:       Oxy-Grid-Layout
 * Description:       Description
 * Version:           1.0.0
 * Author:            Rados
 * Author URI:        purr.cz
 * License:           GNU General Public License v3.0
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.txt
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

add_action( 'ct_before_builder', 'oxyGridLayout' );
/**
 * Add stuff immediately after opening body tag (in both the Oxygen editor and the front end).
 */
function oxyGridLayout() {
	if ( defined( 'SHOW_CT_BUILDER') ) {
		wp_enqueue_style( 'oxy-grid-layout-css', plugin_dir_url( __FILE__ ) . 'assets/css/main.css' );
		wp_enqueue_script( 'oxy-grid-layout-js', plugin_dir_url( __FILE__ ) . 'assets/js/grid.js', '', '1.0.0', false );
	}
}