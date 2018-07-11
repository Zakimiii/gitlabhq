import Vuex from 'vuex';
import diffsModule from '~/diffs/store/modules';
import notesModule from '~/notes/stores/modules';
import { mountComponentWithStore } from 'spec/helpers/vue_mount_component_helper';
  const store = new Vuex.Store({
    modules: {
      diffs: diffsModule,
      notes: notesModule,
    },
  });
        props.diffFile.blob.icon = 'file-text-o';
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
    describe('handleToggleFile', () => {
        vm.handleToggleFile(null, false);
        vm.handleToggleFile({ target: vm.$refs.header }, true);
        vm.handleToggleFile({ target: 'not header' }, true);
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
      vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
      vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
        vm = mountComponentWithStore(Component, { props, store });
          vm = mountComponentWithStore(Component, { props, store });
          vm = mountComponentWithStore(Component, { props, store });

    describe('handles toggle discussions', () => {
      it('dispatches toggleFileDiscussions when user clicks on toggle discussions button', () => {
        const propsCopy = Object.assign({}, props);
        propsCopy.diffFile.submodule = false;
        propsCopy.diffFile.blob = {
          id: '848ed9407c6730ff16edb3dd24485a0eea24292a',
          path: 'lib/base.js',
          name: 'base.js',
          mode: '100644',
          readableText: true,
          icon: 'file-text-o',
        };
        propsCopy.addMergeRequestButtons = true;
        propsCopy.diffFile.deletedFile = true;

        vm = mountComponentWithStore(Component, {
          props: propsCopy,
          store,
        });

        spyOn(vm, 'toggleFileDiscussions');

        vm.$el.querySelector('.js-btn-vue-toggle-comments').click();

        expect(vm.toggleFileDiscussions).toHaveBeenCalled();
      });
    });