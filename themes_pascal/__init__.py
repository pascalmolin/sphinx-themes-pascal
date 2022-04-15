import os

__version__ = '0.0.1'


def setup(app):
    base = os.path.dirname(__file__)
    app.add_html_theme('pascal', os.path.join(base, 'pascal'))
    app.add_html_theme('tp', os.path.join(base, 'tp'))
    return {
        'version': __version__,
        'parallel_read_safe': True
    }
