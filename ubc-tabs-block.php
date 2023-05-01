<?php
/**
 * UBC Tab Block
 *
 * @package     SauderBlocks
 * @author      Christy Yao
 * @copyright   2019 Christy Yao
 * @license     GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name: UBC Tab Block
 * Plugin URI:  https://sauder.ubc.ca/
 * Description: Tab Block for UBC Sauder
 * Version:     1.0.0
 * Author:      Christy Yao
 * Author URI:  https://christyyao.com
 * Text Domain: ubc-tab-block
 * License:     GPL v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

 add_action('init', 'ubc_tab_blocks_asset_load', 10);
 add_action( 'wp_enqueue_scripts', 'ubc_tab_blocks_frontend_assets' );

 /**
  * Enqueue assets to frontend pages.
  *
  * @return void
  */
 function ubc_tab_blocks_frontend_assets() {
    wp_enqueue_script(
        'ubc-tab-script-frontend',
        plugins_url( 'build/frontend.js', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/frontend.js'),
        true
   );

   wp_register_style(
        'ubc-tab-style-frontend',
        plugins_url( '/build/frontend.css', __FILE__ ),
        array('wp-editor'),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/frontend.css' )
    );
    wp_enqueue_style( 'ubc-tab-style-frontend' );
 }

 /**
  * Regiter Tabs block and enqueue block assets.
  *
  * @return void
  */
 function ubc_tab_blocks_asset_load(){
     wp_register_script(
         'ubc-tab-script-block',
         plugins_url( 'build/block.js', __FILE__ ),
         array(
             'wp-blocks',
             'wp-i18n',
             'wp-element',
             'wp-editor',
             'wp-plugins',
             'wp-edit-post',
         ),
         filemtime( plugin_dir_path( __FILE__ ) . 'build/block.js'),
         true
    );

    wp_register_style(
        'ubc-tab-style-block',
        plugins_url( '/build/block.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/block.css' )
    );

    register_block_type( 'ubc/tab', array(
        'editor_script' => 'ubc-tab-script-block',
        'editor_style'  => 'ubc-tab-style-block',
    ) );
 }

 /**
  * Workaround to acommondate the deprecated change in A11y-accordion-tabs JavaScript library.
  * So that the tabs will continue to work in the frontend without the need for administrators to re-save it manually in the editor.
  * https://github.com/matthiasott/a11y-accordion-tabs/commit/f44bb27e2adda00e3ed72058472a1378bdd3fc05
  */
 function apply_a11y_accordion_tabs_typo( $block_content, $block ) {

	if ( $block['blockName'] !== 'ubc/tab' && $block['blockName'] !== 'ubc/tabs' ) {
		return $block_content;
	}

    return str_replace( 'accordeon', 'accordion', $block_content );;

}
add_filter( 'render_block', 'apply_a11y_accordion_tabs_typo', 10, 2 );
