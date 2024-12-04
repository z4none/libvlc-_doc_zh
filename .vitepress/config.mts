import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LIBVLC document",
  description: "LIBVLC documnent 中文",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Core Documentation',
        items: [
          { text: 'Deprecated', link: '/files/deprecated' },
          { text: 'LibVLC', link: '/files/libvlc' },
          { text: 'LibVLC Events', link: '/files/libvlc_events' },
          { text: 'LibVLC Media', link: '/files/libvlc_media' },
          { text: 'LibVLC Media Discoverer', link: '/files/libvlc_media_discoverer' },
          { text: 'LibVLC Media Library', link: '/files/libvlc_media_library' },
          { text: 'LibVLC Media List', link: '/files/libvlc_media_list' },
          { text: 'LibVLC Media List Player', link: '/files/libvlc_media_list_player' },
          { text: 'LibVLC Media Player', link: '/files/libvlc_media_player' },
          { text: 'LibVLC Structures', link: '/files/libvlc_structures' },
          { text: 'LibVLC Version', link: '/files/libvlc_version' },
          { text: 'LibVLC VLM', link: '/files/libvlc_vlm' },
          { text: 'VLC', link: '/files/vlc' }
        ]
      },
      {
        text: 'Plugin Development',
        items: [
          { text: 'About', link: '/files/plugins/vlc_about' },
          { text: 'Access', link: '/files/plugins/vlc_access' },
          { text: 'Add-ons', link: '/files/plugins/vlc_addons' },
          { text: 'Audio Output', link: '/files/plugins/vlc_aout' },
          { text: 'Audio Volume', link: '/files/plugins/vlc_aout_volume' },
          { text: 'Arrays', link: '/files/plugins/vlc_arrays' },
          { text: 'Atomic Operations', link: '/files/plugins/vlc_atomic' },
          { text: 'AV Codec', link: '/files/plugins/vlc_avcodec' },
          { text: 'Bits Manipulation', link: '/files/plugins/vlc_bits' },
          { text: 'Block Management', link: '/files/plugins/vlc_block' },
          { text: 'Block Helper', link: '/files/plugins/vlc_block_helper' },
          { text: 'Character Sets', link: '/files/plugins/vlc_charset' },
          { text: 'Codec', link: '/files/plugins/vlc_codec' },
          { text: 'Common Definitions', link: '/files/plugins/vlc_common' },
          { text: 'Configuration', link: '/files/plugins/vlc_config' },
          { text: 'Config Categories', link: '/files/plugins/vlc_config_cat' },
          { text: 'Configuration System', link: '/files/plugins/vlc_configuration' },
          { text: 'CPU Features', link: '/files/plugins/vlc_cpu' },
          { text: 'Demuxer', link: '/files/plugins/vlc_demux' },
          { text: 'Dialog', link: '/files/plugins/vlc_dialog' },
          { text: 'EPG', link: '/files/plugins/vlc_epg' },
          { text: 'Elementary Streams', link: '/files/plugins/vlc_es' },
          { text: 'ES Output', link: '/files/plugins/vlc_es_out' },
          { text: 'Events System', link: '/files/plugins/vlc_events' },
          { text: 'Filter', link: '/files/plugins/vlc_filter' },
          { text: 'Fingerprinter', link: '/files/plugins/vlc_fingerprinter' },
          { text: 'FourCC', link: '/files/plugins/vlc_fourcc' },
          { text: 'File System', link: '/files/plugins/vlc_fs' },
          { text: 'GCrypt', link: '/files/plugins/vlc_gcrypt' },
          { text: 'HTTP', link: '/files/plugins/vlc_http' },
          { text: 'HTTPD', link: '/files/plugins/vlc_httpd' },
          { text: 'Image', link: '/files/plugins/vlc_image' },
          { text: 'Inhibit', link: '/files/plugins/vlc_inhibit' },
          { text: 'Input', link: '/files/plugins/vlc_input' },
          { text: 'Input Item', link: '/files/plugins/vlc_input_item' },
          { text: 'Keys', link: '/files/plugins/vlc_keys' },
          { text: 'Main', link: '/files/plugins/vlc_main' },
          { text: 'MD5', link: '/files/plugins/vlc_md5' },
          { text: 'Media Library', link: '/files/plugins/vlc_media_library' },
          { text: 'Messages', link: '/files/plugins/vlc_messages' },
          { text: 'Meta Data', link: '/files/plugins/vlc_meta' },
          { text: 'Meta Fetcher', link: '/files/plugins/vlc_meta_fetcher' },
          { text: 'MIME', link: '/files/plugins/vlc_mime' },
          { text: 'Modules', link: '/files/plugins/vlc_modules' },
          { text: 'Mouse', link: '/files/plugins/vlc_mouse' },
          { text: 'Time', link: '/files/plugins/vlc_mtime' },
          { text: 'Network', link: '/files/plugins/vlc_network' },
          { text: 'Objects', link: '/files/plugins/vlc_objects' },
          { text: 'OpenGL', link: '/files/plugins/vlc_opengl' },
          { text: 'Picture', link: '/files/plugins/vlc_picture' },
          { text: 'Picture FIFO', link: '/files/plugins/vlc_picture_fifo' },
          { text: 'Picture Pool', link: '/files/plugins/vlc_picture_pool' },
          { text: 'Playlist', link: '/files/plugins/vlc_playlist' },
          { text: 'Plugin', link: '/files/plugins/vlc_plugin' },
          { text: 'Probe', link: '/files/plugins/vlc_probe' },
          { text: 'Random', link: '/files/plugins/vlc_rand' },
          { text: 'Services Discovery', link: '/files/plugins/vlc_services_discovery' },
          { text: 'Stream Output', link: '/files/plugins/vlc_sout' },
          { text: 'SPU', link: '/files/plugins/vlc_spu' },
          { text: 'Stream', link: '/files/plugins/vlc_stream' },
          { text: 'Strings', link: '/files/plugins/vlc_strings' },
          { text: 'Subpicture', link: '/files/plugins/vlc_subpicture' },
          { text: 'Text Style', link: '/files/plugins/vlc_text_style' },
          { text: 'Threads', link: '/files/plugins/vlc_threads' },
          { text: 'TLS', link: '/files/plugins/vlc_tls' },
          { text: 'URL', link: '/files/plugins/vlc_url' },
          { text: 'Variables', link: '/files/plugins/vlc_variables' },
          { text: 'Video Splitter', link: '/files/plugins/vlc_video_splitter' },
          { text: 'VLM', link: '/files/plugins/vlc_vlm' },
          { text: 'Video Output', link: '/files/plugins/vlc_vout' },
          { text: 'Video Display', link: '/files/plugins/vlc_vout_display' },
          { text: 'Video OSD', link: '/files/plugins/vlc_vout_osd' },
          { text: 'Video Window', link: '/files/plugins/vlc_vout_window' },
          { text: 'X11', link: '/files/plugins/vlc_xlib' },
          { text: 'XML', link: '/files/plugins/vlc_xml' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
